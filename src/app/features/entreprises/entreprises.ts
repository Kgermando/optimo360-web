import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
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
    MatSelectModule,
    RouterLink,
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
  editingEntreprise = signal<Entreprise | null>(null);
  columns = ['name', 'rccm', 'email', 'telephone', 'status', 'actions'];

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

  editForm = this.fb.group({
    name: ['', Validators.required],
    rccm: ['', Validators.required],
    idnat: ['', Validators.required],
    nimpot: ['', Validators.required],
    adresse: ['', Validators.required],
    telephone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    website: [''],
    status: ['active', Validators.required],
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

  startEdit(entreprise: Entreprise) {
    this.editingEntreprise.set(entreprise);
    this.editForm.reset({
      name: entreprise.name,
      rccm: entreprise.rccm,
      idnat: entreprise.idnat,
      nimpot: entreprise.nimpot,
      adresse: entreprise.adresse,
      telephone: entreprise.telephone,
      email: entreprise.email,
      website: entreprise.website,
      status: entreprise.status,
    });
  }

  cancelEdit() {
    this.editingEntreprise.set(null);
    this.editForm.reset();
  }

  saveEdit() {
    const entreprise = this.editingEntreprise();
    if (!entreprise || this.editForm.invalid) return;

    const payload: Partial<Entreprise> = {
      name: this.editForm.value.name ?? undefined,
      rccm: this.editForm.value.rccm ?? undefined,
      idnat: this.editForm.value.idnat ?? undefined,
      nimpot: this.editForm.value.nimpot ?? undefined,
      adresse: this.editForm.value.adresse ?? undefined,
      telephone: this.editForm.value.telephone ?? undefined,
      email: this.editForm.value.email ?? undefined,
      website: this.editForm.value.website ?? undefined,
      status: this.editForm.value.status ?? undefined,
    };

    this.api.updateEntreprise(entreprise.uuid, payload).subscribe({
      next: () => {
        this.snack.open('Entreprise mise à jour', 'OK', { duration: 3000 });
        this.cancelEdit();
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur mise à jour', 'OK', { duration: 5000 }),
    });
  }

  deleteEntreprise(entreprise: Entreprise) {
    if (!confirm(`Supprimer ${entreprise.name} ?`)) return;

    this.api.deleteEntreprise(entreprise.uuid).subscribe({
      next: () => {
        this.snack.open('Entreprise supprimée', 'OK', { duration: 3000 });
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur suppression', 'OK', { duration: 5000 }),
    });
  }
}
