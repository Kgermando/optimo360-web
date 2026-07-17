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
import { DEVISES, PRODUCT_UNITS, Produit } from '../../core/models';

@Component({
  selector: 'app-produits',
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
  templateUrl: './produits.html',
  styleUrl: './produits.scss',
})
export class ProduitsComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private snack = inject(MatSnackBar);

  devises = DEVISES;
  unites = PRODUCT_UNITS;
  produits = signal<Produit[]>([]);
  showForm = signal(false);
  columns = ['code', 'nom', 'prix_unitaire', 'devise', 'quantite_stock', 'unite'];

  form = this.fb.group({
    code: ['', Validators.required],
    nom: ['', Validators.required],
    description: [''],
    prix_unitaire: [0, [Validators.required, Validators.min(1)]],
    devise: ['FC' as const, Validators.required],
    quantite_stock: [0, [Validators.required, Validators.min(0)]],
    unite: ['unité', Validators.required],
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getProduits().subscribe((p) => this.produits.set(p));
  }

  submit() {
    if (this.form.invalid) return;
    this.api.createProduit(this.form.getRawValue() as Partial<Produit>).subscribe({
      next: () => {
        this.snack.open('Produit créé', 'OK', { duration: 3000 });
        this.form.reset({ unite: 'unité', devise: 'FC', prix_unitaire: 0, quantite_stock: 0 });
        this.showForm.set(false);
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
    });
  }

  unitLabel(value: string): string {
    return this.unites.find((u) => u.value === value)?.label ?? value;
  }
}
