import { DecimalPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { CaisseAgent } from '../../core/models';

@Component({
  selector: 'app-parametres',
  imports: [
    DecimalPipe,
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './parametres.html',
  styleUrl: './parametres.scss',
})
export class ParametresComponent implements OnInit {
  private api = inject(ApiService);
  auth = inject(AuthService);

  loading = signal(true);
  caisses = signal<CaisseAgent[]>([]);

  ngOnInit() {
    this.api.getCaissesAgent().subscribe({
      next: (c) => {
        this.caisses.set(c);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
