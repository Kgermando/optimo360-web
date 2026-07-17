import { Component, inject, OnInit, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../core/services/api.service';
import { DEVISES, Prestation } from '../../core/models';

@Component({
  selector: 'app-prestations',
  imports: [
    DecimalPipe,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  templateUrl: './prestations.html',
  styleUrl: './prestations.scss',
})
export class PrestationsComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private snack = inject(MatSnackBar);

  devises = DEVISES;
  prestations = signal<Prestation[]>([]);
  showForm = signal(false);
  columns = ['code', 'nom', 'prix', 'devise'];

  form = this.fb.group({
    code: ['', Validators.required],
    nom: ['', Validators.required],
    description: [''],
    prix: [0, [Validators.required, Validators.min(1)]],
    devise: ['FC' as const, Validators.required],
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getPrestations().subscribe((p) => this.prestations.set(p));
  }

  submit() {
    if (this.form.invalid) return;
    this.api.createPrestation(this.form.getRawValue() as Partial<Prestation>).subscribe({
      next: () => {
        this.snack.open('Prestation créée', 'OK', { duration: 3000 });
        this.form.reset({ prix: 0, devise: 'FC' });
        this.showForm.set(false);
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
    });
  }
}
