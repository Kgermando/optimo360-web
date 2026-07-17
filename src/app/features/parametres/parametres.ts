import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { CaisseAgent, Parametre } from '../../core/models';

@Component({
  selector: 'app-parametres',
  imports: [
    DecimalPipe,
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './parametres.html',
  styleUrl: './parametres.scss',
})
export class ParametresComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private snack = inject(MatSnackBar);
  auth = inject(AuthService);

  loading = signal(true);
  saving = signal(false);
  caisses = signal<CaisseAgent[]>([]);
  parametres = signal<Parametre | null>(null);
  isSuperAdmin = computed(() => this.auth.hasRole('super_admin'));

  form = this.fb.group({
    otp_expiration_minutes: [5, [Validators.required, Validators.min(1), Validators.max(60)]],
    otp_code_length: [6, [Validators.required, Validators.min(4), Validators.max(8)]],
    jwt_expiration_hours: [24, [Validators.required, Validators.min(1), Validators.max(168)]],
    password_min_length: [6, [Validators.required, Validators.min(6), Validators.max(32)]],
    journal_page_size: [50, [Validators.required, Validators.min(10), Validators.max(200)]],
    default_seuil_fc: [500000, [Validators.required, Validators.min(1)]],
    default_seuil_usd: [500, [Validators.required, Validators.min(1)]],
  });

  ngOnInit() {
    this.api.getParametres().subscribe({
      next: (p) => {
        this.parametres.set(p);
        this.form.patchValue({
          otp_expiration_minutes: p.otp_expiration_minutes,
          otp_code_length: p.otp_code_length,
          jwt_expiration_hours: p.jwt_expiration_hours,
          password_min_length: p.password_min_length,
          journal_page_size: p.journal_page_size,
          default_seuil_fc: p.default_seuil_fc,
          default_seuil_usd: p.default_seuil_usd,
        });
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });

    if (!this.isSuperAdmin()) {
      this.api.getCaissesAgent().subscribe({
        next: (c) => this.caisses.set(c),
      });
    }
  }

  save() {
    if (this.form.invalid) return;
    this.saving.set(true);
    const raw = this.form.getRawValue();
    const payload: Partial<Parametre> = this.isSuperAdmin()
      ? {
          otp_expiration_minutes: raw.otp_expiration_minutes ?? undefined,
          otp_code_length: raw.otp_code_length ?? undefined,
          jwt_expiration_hours: raw.jwt_expiration_hours ?? undefined,
          password_min_length: raw.password_min_length ?? undefined,
          journal_page_size: raw.journal_page_size ?? undefined,
          default_seuil_fc: raw.default_seuil_fc ?? undefined,
          default_seuil_usd: raw.default_seuil_usd ?? undefined,
        }
      : {
          default_seuil_fc: raw.default_seuil_fc ?? undefined,
          default_seuil_usd: raw.default_seuil_usd ?? undefined,
        };

    this.api.updateParametres(payload).subscribe({
      next: (p) => {
        this.parametres.set(p);
        this.saving.set(false);
        this.snack.open('Paramètres enregistrés', 'OK', { duration: 3000 });
      },
      error: (err) => {
        this.saving.set(false);
        this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 });
      },
    });
  }
}
