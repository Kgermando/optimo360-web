import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ApiService } from '../../core/services/api.service';
import { Entreprise, User } from '../../core/models';

const ROLE_LABELS: Record<User['role'], string> = {
  super_admin: 'Super administrateur',
  admin: 'Administrateur',
  manager: 'Manager',
  agent: 'Agent caisse',
};

@Component({
  selector: 'app-entreprise-detail',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  templateUrl: './entreprise-detail.html',
  styleUrl: './entreprise-detail.scss',
})
export class EntrepriseDetailComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private snack = inject(MatSnackBar);
  private bp = inject(BreakpointObserver);

  isMobile = toSignal(
    this.bp.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(map((r) => r.matches)),
    { initialValue: false },
  );

  entreprise = signal<Entreprise | null>(null);
  users = signal<User[]>([]);
  currentUuid = signal<string | null>(null);
  editingUser = signal<User | null>(null);
  showCreateForm = signal(false);
  userSearch = signal('');
  usersColumns = ['full_name', 'email', 'phone', 'role', 'status', 'actions'];

  filteredUsers = computed(() => {
    const query = this.userSearch().trim().toLowerCase();
    if (!query) {
      return this.users();
    }
    return this.users().filter(
      (u) =>
        u.full_name.toLowerCase().includes(query) ||
        u.email.toLowerCase().includes(query) ||
        u.phone.toLowerCase().includes(query) ||
        this.roleLabel(u.role).toLowerCase().includes(query),
    );
  });

  activeUsersCount = computed(() => this.users().filter((u) => u.status === 'active').length);

  adminCount = computed(() => this.users().filter((u) => u.role === 'admin').length);
  managerCount = computed(() => this.users().filter((u) => u.role === 'manager').length);
  agentCount = computed(() => this.users().filter((u) => u.role === 'agent').length);

  editForm = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    role: ['agent', Validators.required],
    status: ['active', Validators.required],
  });

  createForm = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['agent', Validators.required],
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const uuid = params.get('uuid');
      if (uuid) {
        this.currentUuid.set(uuid);
        this.load(uuid);
      }
    });
  }

  load(uuid: string) {
    this.api.getEntreprise(uuid).subscribe((e: Entreprise) => this.entreprise.set(e));
    this.api.getUsers(uuid).subscribe((u: User[]) => this.users.set(u));
  }

  roleLabel(role: User['role']): string {
    return ROLE_LABELS[role] ?? role;
  }

  statusLabel(status: string): string {
    return status === 'active' ? 'Actif' : status === 'suspended' ? 'Suspendu' : status;
  }

  roleChipClass(role: User['role']): string {
    return `role-chip role-chip--${role}`;
  }

  startEdit(user: User) {
    this.editingUser.set(user);
    this.showCreateForm.set(false);
    this.editForm.reset({
      full_name: user.full_name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      status: user.status,
    });
  }

  cancelEdit() {
    this.editingUser.set(null);
    this.editForm.reset();
  }

  saveEdit() {
    const user = this.editingUser();
    if (!user || this.editForm.invalid) {
      return;
    }

    const payload: Partial<User> = {
      full_name: this.editForm.value.full_name ?? undefined,
      email: this.editForm.value.email ?? undefined,
      phone: this.editForm.value.phone ?? undefined,
      role: (this.editForm.value.role as User['role']) ?? undefined,
      status: this.editForm.value.status ?? undefined,
    };
    this.api.updateUser(user.uuid, payload).subscribe({
      next: () => {
        this.snack.open('Utilisateur mis à jour', 'OK', { duration: 3000 });
        this.cancelEdit();
        const uuid = this.currentUuid();
        if (uuid) {
          this.load(uuid);
        }
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur de mise à jour', 'OK', { duration: 5000 }),
    });
  }

  submitCreate() {
    if (this.createForm.invalid) {
      return;
    }

    const uuid = this.currentUuid();
    if (!uuid) {
      return;
    }

    const payload = {
      ...this.createForm.getRawValue(),
      entreprise_uuid: uuid,
    } as Partial<User> & { password: string };

    this.api.createUser(payload).subscribe({
      next: () => {
        this.snack.open('Utilisateur créé', 'OK', { duration: 3000 });
        this.createForm.reset({ role: 'agent' });
        this.showCreateForm.set(false);
        this.load(uuid);
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur création', 'OK', { duration: 5000 }),
    });
  }

  deleteUser(user: User) {
    if (!confirm(`Supprimer ${user.full_name} ?`)) {
      return;
    }

    this.api.deleteUser(user.uuid).subscribe({
      next: () => {
        this.snack.open('Utilisateur supprimé', 'OK', { duration: 3000 });
        const uuid = this.currentUuid();
        if (uuid) {
          this.load(uuid);
        }
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur suppression', 'OK', { duration: 5000 }),
    });
  }

  toggleStatus(user: User) {
    const newStatus = user.status === 'active' ? 'suspended' : 'active';
    this.api.updateUserStatus(user.uuid, newStatus).subscribe({
      next: () => {
        this.snack.open('Statut mis à jour', 'OK', { duration: 3000 });
        const uuid = this.currentUuid();
        if (uuid) {
          this.load(uuid);
        }
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur de statut', 'OK', { duration: 5000 }),
    });
  }
}
