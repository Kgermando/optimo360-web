import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  roles: string[];
}

const ROLE_LABELS: Record<string, string> = {
  super_admin: 'Super administrateur',
  admin: 'Administrateur',
  manager: 'Manager',
  agent: 'Agent',
};

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayoutComponent {
  auth = inject(AuthService);
  private bp = inject(BreakpointObserver);

  user = this.auth.currentUser;
  isMobile = toSignal(
    this.bp.observe([Breakpoints.XSmall]).pipe(map((r) => r.matches)),
    { initialValue: false },
  );
  drawerOpened = signal(true);

  constructor() {
    effect(() => {
      this.drawerOpened.set(!this.isMobile());
    });
  }

  navItems = computed(() => {
    const role = this.auth.userRole();
    if (!role) return [];
    const all: NavItem[] = [
      { label: 'Tableau de bord', icon: 'dashboard', route: '/dashboard', roles: ['super_admin', 'admin', 'manager', 'agent'] },
      { label: 'Entreprises', icon: 'business', route: '/entreprises', roles: ['super_admin'] },
      { label: 'Utilisateurs', icon: 'people', route: '/users', roles: ['super_admin', 'admin', 'manager'] },
      { label: 'Journal', icon: 'history', route: '/journal', roles: ['super_admin', 'admin', 'manager'] },
      { label: 'Encaissement', icon: 'point_of_sale', route: '/encaissement', roles: ['agent'] },
      { label: 'Caisses', icon: 'account_balance_wallet', route: '/caisses', roles: ['admin', 'manager', 'agent'] },
      { label: 'Produits', icon: 'inventory_2', route: '/produits', roles: ['admin', 'manager'] },
      { label: 'Prestations', icon: 'handyman', route: '/prestations', roles: ['admin', 'manager'] },
    ];
    return all.filter((i) => i.roles.includes(role));
  });

  roleLabel(role?: string): string {
    return role ? ROLE_LABELS[role] ?? role : '';
  }

  toggleSidenav() {
    this.drawerOpened.update((open) => !open);
  }

  closeSidenavIfMobile() {
    if (this.isMobile()) {
      this.drawerOpened.set(false);
    }
  }

  logout() {
    this.auth.logout();
  }
}
