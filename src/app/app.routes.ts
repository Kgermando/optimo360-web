import { Routes } from '@angular/router';
import { authGuard, guestGuard, roleGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './shared/layout/main-layout';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then((m) => m.LoginComponent),
    canActivate: [guestGuard],
  },
  {
    path: 'nous-rejoindre',
    loadComponent: () => import('./features/nous-rejoindre/nous-rejoindre').then((m) => m.NousRejoindreComponent),
    canActivate: [guestGuard],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'encaissement',
        loadComponent: () => import('./features/encaissement/encaissement').then((m) => m.EncaissementComponent),
        canActivate: [roleGuard('agent')],
      },
      {
        path: 'caisses',
        loadComponent: () => import('./features/caisses/caisses').then((m) => m.CaissesComponent),
      },
      {
        path: 'produits',
        loadComponent: () => import('./features/produits/produits').then((m) => m.ProduitsComponent),
        canActivate: [roleGuard('admin', 'manager')],
      },
      {
        path: 'prestations',
        loadComponent: () => import('./features/prestations/prestations').then((m) => m.PrestationsComponent),
        canActivate: [roleGuard('admin', 'manager')],
      },
      {
        path: 'users',
        loadComponent: () => import('./features/users/users').then((m) => m.UsersComponent),
        canActivate: [roleGuard('super_admin', 'admin', 'manager')],
      },
      {
        path: 'entreprises',
        loadComponent: () => import('./features/entreprises/entreprises').then((m) => m.EntreprisesComponent),
        canActivate: [roleGuard('super_admin')],
      },
      {
        path: 'demandes-adhesion',
        loadComponent: () => import('./features/demandes-adhesion/demandes-adhesion').then((m) => m.DemandesAdhesionComponent),
        canActivate: [roleGuard('super_admin')],
      },
      {
        path: 'entreprises/:uuid',
        loadComponent: () => import('./features/entreprises/entreprise-detail').then((m) => m.EntrepriseDetailComponent),
        canActivate: [roleGuard('super_admin')],
      },
      {
        path: 'journal',
        loadComponent: () => import('./features/journal/journal').then((m) => m.JournalComponent),
        canActivate: [roleGuard('super_admin', 'admin', 'manager')],
      },
      {
        path: 'profil',
        loadComponent: () => import('./features/profil/profil').then((m) => m.ProfilComponent),
      },
      {
        path: 'parametres',
        loadComponent: () => import('./features/parametres/parametres').then((m) => m.ParametresComponent),
        canActivate: [roleGuard('super_admin', 'admin', 'manager')],
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
