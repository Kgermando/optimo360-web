import { ApplicationRef, inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { concat, filter, first, interval, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppUpdateService {
  private readonly swUpdate = inject(SwUpdate);
  private readonly appRef = inject(ApplicationRef);
  private readonly snack = inject(MatSnackBar);

  private updatePending = false;
  private reloadTimer: ReturnType<typeof setTimeout> | null = null;
  private snackRef: MatSnackBarRef<TextOnlySnackBar> | null = null;
  private readonly subscriptions = new Subscription();

  init(): void {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.subscriptions.add(
      this.swUpdate.unrecoverable.subscribe(() => {
        this.snack.open('Erreur de mise à jour. Rechargement…', undefined, { duration: 3000 });
        document.location.reload();
      }),
    );

    this.subscriptions.add(
      this.swUpdate.versionUpdates
        .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
        .subscribe(() => this.promptForUpdate()),
    );

    this.subscriptions.add(
      this.appRef.isStable.pipe(first((stable) => stable)).subscribe(() => {
        void this.checkForUpdate();

        this.subscriptions.add(
          interval(30 * 60 * 1000).subscribe(() => void this.checkForUpdate()),
        );
      }),
    );

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', this.onVisibilityChange);
    }
  }

  private readonly onVisibilityChange = (): void => {
    if (document.visibilityState === 'visible') {
      void this.checkForUpdate();
    }
  };

  private async checkForUpdate(): Promise<void> {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    try {
      await this.swUpdate.checkForUpdate();
    } catch {
      // Hors ligne ou navigateur incompatible.
    }
  }

  private promptForUpdate(): void {
    if (this.updatePending) {
      return;
    }

    this.updatePending = true;
    this.snackRef?.dismiss();

    this.snackRef = this.snack.open(
      'Une nouvelle version est disponible. Mise à jour automatique dans 30 s…',
      'Mettre à jour',
      {
        duration: 0,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['app-update-snackbar'],
      },
    );

    this.subscriptions.add(
      this.snackRef.onAction().subscribe(() => {
        void this.applyUpdate();
      }),
    );

    this.subscriptions.add(
      this.snackRef.afterDismissed().subscribe(() => {
        this.clearReloadTimer();
        this.snackRef = null;
        this.updatePending = false;
      }),
    );

    this.reloadTimer = setTimeout(() => void this.applyUpdate(), 30_000);
  }

  private async applyUpdate(): Promise<void> {
    this.clearReloadTimer();
    this.snackRef?.dismiss();

    try {
      await this.swUpdate.activateUpdate();
      document.location.reload();
    } catch {
      this.updatePending = false;
      this.snack.open('Impossible d\'appliquer la mise à jour.', 'Fermer', { duration: 8000 });
    }
  }

  private clearReloadTimer(): void {
    if (this.reloadTimer) {
      clearTimeout(this.reloadTimer);
      this.reloadTimer = null;
    }
  }
}
