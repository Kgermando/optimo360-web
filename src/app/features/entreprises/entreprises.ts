import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { ApiService } from '../../core/services/api.service';
import { Entreprise } from '../../core/models';

@Component({
  selector: 'app-entreprises',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
  ],
  templateUrl: './entreprises.html',
  styleUrl: './entreprises.scss',
})
export class EntreprisesComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private snack = inject(MatSnackBar);

  entreprises = signal<Entreprise[]>([]);
  showForm = signal(false);
  columns = ['name', 'rccm', 'email', 'telephone', 'status'];

  form = this.fb.group({
    name: ['', Validators.required],
    rccm: ['', Validators.required],
    idnat: ['', Validators.required],
    nimpot: ['', Validators.required],
    adresse: ['', Validators.required],
    telephone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    website: [''],
    admin_full_name: ['', Validators.required],
    admin_email: ['', [Validators.required, Validators.email]],
    admin_phone: ['', Validators.required],
    admin_password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getEntreprises().subscribe((e) => this.entreprises.set(e));
  }

  submit() {
    if (this.form.invalid) return;
    this.api.createEntreprise(this.form.getRawValue() as never).subscribe({
      next: (res) => {
        this.snack.open(
          `Entreprise "${res.entreprise.name}" créée — Admin: ${res.admin.email}`,
          'OK',
          { duration: 6000 },
        );
        this.form.reset();
        this.showForm.set(false);
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
    });
  }
}
