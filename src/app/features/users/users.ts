import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { Entreprise, User } from '../../core/models';

@Component({
  selector: 'app-users',
  imports: [
    UpperCasePipe,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class UsersComponent implements OnInit {
  private api = inject(ApiService);
  private auth = inject(AuthService);
  private fb = inject(FormBuilder);
  private snack = inject(MatSnackBar);

  users = signal<User[]>([]);
  entreprises = signal<Entreprise[]>([]);
  showForm = signal(false);
  selectedEntreprise = signal('');

  isSuperAdmin = computed(() => this.auth.hasRole('super_admin'));

  columns = computed(() =>
    this.isSuperAdmin()
      ? ['full_name', 'email', 'entreprise', 'role', 'status', 'actions']
      : ['full_name', 'email', 'role', 'status', 'actions'],
  );

  form = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['agent', Validators.required],
    entreprise_uuid: [''],
  });

  ngOnInit() {
    if (this.isSuperAdmin()) {
      this.api.getEntreprises().subscribe((e) => this.entreprises.set(e));
    }
    this.load();
  }

  load() {
    const filter = this.isSuperAdmin() ? this.selectedEntreprise() || undefined : undefined;
    this.api.getUsers(filter).subscribe((u) => this.users.set(u));
  }

  onFilterChange(entrepriseUuid: string) {
    this.selectedEntreprise.set(entrepriseUuid);
    this.load();
  }

  getEntrepriseName(uuid?: string): string {
    if (!uuid) return '—';
    return this.entreprises().find((e) => e.uuid === uuid)?.name ?? uuid;
  }

  submit() {
    if (this.form.invalid) return;
    if (this.isSuperAdmin() && !this.form.value.entreprise_uuid) {
      this.snack.open('Sélectionnez une entreprise', 'OK', { duration: 3000 });
      return;
    }
    this.api.createUser(this.form.getRawValue() as Partial<User> & { password: string }).subscribe({
      next: () => {
        this.snack.open('Utilisateur créé', 'OK', { duration: 3000 });
        this.form.reset({ role: 'agent', entreprise_uuid: '' });
        this.showForm.set(false);
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
    });
  }

  toggleStatus(user: User) {
    const newStatus = user.status === 'active' ? 'suspended' : 'active';
    this.api.updateUserStatus(user.uuid, newStatus).subscribe({
      next: () => {
        this.snack.open('Statut mis à jour', 'OK', { duration: 3000 });
        this.load();
      },
    });
  }
}
