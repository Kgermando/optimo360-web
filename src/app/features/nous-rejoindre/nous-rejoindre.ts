import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
import { SubmitAdhesionPayload } from '../../core/models';

interface FormStep {
  id: number;
  label: string;
  subtitle: string;
  icon: string;
  fields: string[];
}

const FORM_STEPS: FormStep[] = [
  {
    id: 0,
    label: 'Contact',
    subtitle: 'Personne référente',
    icon: 'person_outline',
    fields: ['contact_name', 'email', 'phone'],
  },
  {
    id: 1,
    label: 'Entreprise',
    subtitle: 'Informations légales',
    icon: 'business',
    fields: ['company_name', 'adresse'],
  },
  {
    id: 2,
    label: 'Structure',
    subtitle: 'Description & envoi',
    icon: 'description',
    fields: ['message'],
  },
];

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
  ],
  templateUrl: './nous-rejoindre.html',
  styleUrl: './nous-rejoindre.scss',
})
export class NousRejoindreComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  readonly steps = FORM_STEPS;
  readonly totalSteps = FORM_STEPS.length;

  loading = signal(false);
  submitted = signal(false);
  success = signal(false);
  error = signal('');
  currentStep = signal(0);
  stepTouched = signal<boolean[]>([false, false, false]);
  year = new Date().getFullYear();

  progress = computed(() => ((this.currentStep() + 1) / this.totalSteps) * 100);

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

  isStepActive(index: number): boolean {
    return this.currentStep() === index;
  }

  isStepDone(index: number): boolean {
    return this.currentStep() > index;
  }

  showStepErrors(): boolean {
    return this.stepTouched()[this.currentStep()] || this.submitted();
  }

  nextStep() {
    if (!this.validateStep(this.currentStep())) return;
    if (this.currentStep() < this.totalSteps - 1) {
      this.currentStep.update((s) => s + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 0) {
      this.currentStep.update((s) => s - 1);
    }
  }

  goToStep(index: number) {
    if (index < this.currentStep()) {
      this.currentStep.set(index);
      return;
    }
    for (let i = this.currentStep(); i < index; i++) {
      if (!this.validateStep(i)) return;
    }
    this.currentStep.set(index);
  }

  submit() {
    this.submitted.set(true);
    for (let i = 0; i < this.totalSteps; i++) {
      if (!this.validateStep(i, true)) {
        this.currentStep.set(i);
        return;
      }
    }

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

  private validateStep(step: number, silent = false): boolean {
    if (!silent) {
      this.stepTouched.update((t) => {
        const next = [...t];
        next[step] = true;
        return next;
      });
    }

    const fields = this.steps[step].fields;
    let valid = true;
    for (const name of fields) {
      const control = this.form.get(name);
      control?.markAsTouched();
      if (control?.invalid) valid = false;
    }
    return valid;
  }
}
