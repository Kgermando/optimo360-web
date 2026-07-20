import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApiService } from '../../core/services/api.service';
import { AdhesionStatus, DemandeAdhesion } from '../../core/models';

const STATUS_LABELS: Record<AdhesionStatus, string> = {
  pending: 'En attente',
  reviewed: 'Examinée',
  accepted: 'Acceptée',
  rejected: 'Refusée',
};

@Component({
  selector: 'app-demandes-adhesion',
  imports: [
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatExpansionModule,
  ],
  templateUrl: './demandes-adhesion.html',
  styleUrl: './demandes-adhesion.scss',
})
export class DemandesAdhesionComponent implements OnInit {
  private api = inject(ApiService);
  private snack = inject(MatSnackBar);

  demandes = signal<DemandeAdhesion[]>([]);
  filter = signal<string>('all');
  loading = signal(true);

  readonly statusLabels = STATUS_LABELS;
  readonly statusOptions: AdhesionStatus[] = ['pending', 'reviewed', 'accepted', 'rejected'];

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading.set(true);
    const status = this.filter() === 'all' ? undefined : this.filter();
    this.api.getAdhesions(status).subscribe({
      next: (data) => {
        this.demandes.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.snack.open('Impossible de charger les demandes', 'Fermer', { duration: 4000 });
      },
    });
  }

  onFilterChange(value: string) {
    this.filter.set(value);
    this.load();
  }

  updateStatus(demande: DemandeAdhesion, status: AdhesionStatus) {
    this.api.updateAdhesionStatus(demande.uuid, status).subscribe({
      next: (updated) => {
        this.demandes.update((list) => list.map((d) => (d.uuid === updated.uuid ? updated : d)));
        this.snack.open('Statut mis à jour', 'Fermer', { duration: 3000 });
      },
      error: () => this.snack.open('Erreur lors de la mise à jour', 'Fermer', { duration: 4000 }),
    });
  }
}
