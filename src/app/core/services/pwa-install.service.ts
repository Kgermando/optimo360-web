import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstallAppDialogComponent } from '../../shared/install-app-dialog/install-app-dialog';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

@Injectable({ providedIn: 'root' })
export class PwaInstallService {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;
  private dialogOpen = false;
  private readonly dismissKey = 'optimo360-install-dismissed-until';

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event as BeforeInstallPromptEvent;
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
      this.markDismissed(365);
    });
  }

  isStandalone(): boolean {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    );
  }

  isIos(): boolean {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      return true;
    }
    return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  }

  isAndroid(): boolean {
    return /android/i.test(navigator.userAgent);
  }

  isMobileDevice(): boolean {
    return this.isIos() || this.isAndroid() || window.innerWidth < 768;
  }

  canNativeInstall(): boolean {
    return !!this.deferredPrompt;
  }

  shouldOfferInstall(): boolean {
    if (this.isStandalone()) {
      return false;
    }
    return !this.isDismissedRecently();
  }

  async promptInstall(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return false;
    }

    await this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    this.deferredPrompt = null;

    if (outcome === 'accepted') {
      this.markDismissed(365);
    }

    return outcome === 'accepted';
  }

  markDismissed(days = 14): void {
    const until = Date.now() + days * 86_400_000;
    localStorage.setItem(this.dismissKey, String(until));
  }

  isDismissedRecently(): boolean {
    const until = Number(localStorage.getItem(this.dismissKey) || 0);
    return Date.now() < until;
  }

  maybeOpenDialog(dialog: MatDialog): void {
    if (this.dialogOpen || !this.shouldOfferInstall()) {
      return;
    }

    this.dialogOpen = true;

    const ref = dialog.open(InstallAppDialogComponent, {
      width: '520px',
      maxWidth: '95vw',
      autoFocus: false,
      panelClass: 'install-app-dialog-panel',
      data: {
        canNativeInstall: this.canNativeInstall(),
        isIos: this.isIos(),
        isAndroid: this.isAndroid(),
        isMobileDevice: this.isMobileDevice(),
      },
    });

    ref.afterClosed().subscribe((result: 'install' | 'dismiss' | undefined) => {
      this.dialogOpen = false;
      if (result === 'install') {
        void this.promptInstall();
      } else if (result === 'dismiss') {
        this.markDismissed();
      }
    });
  }
}
