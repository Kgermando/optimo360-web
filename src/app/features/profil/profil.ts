import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models';

@Component({
  selector: 'app-profil',
  imports: [MatCardModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class ProfilComponent implements OnInit {
  auth = inject(AuthService);
  loading = signal(true);
  user = signal<User | null>(null);

  private roleLabels: Record<string, string> = {
    super_admin: 'Super administrateur',
    admin: 'Administrateur',
    manager: 'Manager',
    agent: 'Agent',
  };

  ngOnInit() {
    this.auth.refreshUser().subscribe({
      next: (u) => {
        this.user.set(u);
        this.loading.set(false);
      },
      error: () => {
        this.user.set(this.auth.currentUser());
        this.loading.set(false);
      },
    });
  }

  roleLabel(role?: string): string {
    return role ? this.roleLabels[role] ?? role : '';
  }
}
