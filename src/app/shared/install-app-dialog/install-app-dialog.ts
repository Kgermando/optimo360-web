import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface InstallAppDialogData {
  canNativeInstall: boolean;
  isIos: boolean;
  isAndroid: boolean;
  isMobileDevice: boolean;
}

@Component({
  selector: 'app-install-app-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './install-app-dialog.html',
  styleUrl: './install-app-dialog.scss',
})
export class InstallAppDialogComponent {
  private dialogRef = inject(MatDialogRef<InstallAppDialogComponent>);
  data = inject<InstallAppDialogData>(MAT_DIALOG_DATA);

  installNow(): void {
    this.dialogRef.close('install');
  }

  dismissLater(): void {
    this.dialogRef.close('dismiss');
  }
}
