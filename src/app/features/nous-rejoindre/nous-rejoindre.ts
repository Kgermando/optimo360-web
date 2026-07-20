import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
import { SubmitAdhesionPayload } from '../../core/models';

@Component({
  selector: 'app-nous-rejoindre',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  templateUrl: './nous-rejoindre.html',
  styleUrl: './nous-rejoindre.scss',
})
export class NousRejoindreComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  loading = signal(false);
  submitted = signal(false);
  success = signal(false);
  error = signal('');

  form = this.fb.group({
    contact_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    company_name: ['', Validators.required],
    rccm: [''],
    idnat: [''],
    nimpot: [''],
    adresse: ['', Validators.required],
    website: [''],
    secteur_activite: [''],
    nb_employes: [0, [Validators.min(0)]],
    nb_caisses: [0, [Validators.min(0)]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  submit() {
    this.submitted.set(true);
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set('');

    this.api.submitAdhesion(this.form.getRawValue() as SubmitAdhesionPayload).subscribe({
      next: () => {
        this.loading.set(false);
        this.success.set(true);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.error.set(err.error?.error || "Impossible d'envoyer la demande. Réessayez plus tard.");
      },
    });
  }
}
