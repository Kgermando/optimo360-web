import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { ApiService } from '../../core/services/api.service';
import {
  BilletLigne,
  CaisseAgent,
  COUPURES_FC,
  COUPURES_USD,
  Prestation,
  PrintData,
  Produit,
} from '../../core/models';
import { ReceiptPrintComponent } from '../../shared/print/receipt-print';

interface CartItem {
  item_type: string;
  item_uuid: string;
  nom: string;
  quantite: number;
  prix: number;
  devise: 'FC' | 'USD';
}

interface BilletInput {
  valeur: number;
  devise: 'FC' | 'USD';
  quantite: number;
}

@Component({
  selector: 'app-encaissement',
  imports: [
    DecimalPipe,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    ReceiptPrintComponent,
  ],
  templateUrl: './encaissement.html',
  styleUrl: './encaissement.scss',
})
export class EncaissementComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private snack = inject(MatSnackBar);

  caisses = signal<CaisseAgent[]>([]);
  produits = signal<Produit[]>([]);
  prestations = signal<Prestation[]>([]);
  cart = signal<CartItem[]>([]);
  loading = signal(false);
  printData = signal<PrintData | null>(null);

  coupuresFC = COUPURES_FC;
  coupuresUSD = COUPURES_USD;
  billetsFC = signal<BilletInput[]>(COUPURES_FC.map((v) => ({ valeur: v, devise: 'FC' as const, quantite: 0 })));
  billetsUSD = signal<BilletInput[]>(COUPURES_USD.map((v) => ({ valeur: v, devise: 'USD' as const, quantite: 0 })));

  form = this.fb.group({
    caisse_uuid: ['', Validators.required],
    client_nom: [''],
    notes: [''],
  });

  selectedCaisse = computed(() => {
    const uuid = this.form.value.caisse_uuid;
    return this.caisses().find((c) => c.uuid === uuid);
  });

  totalFC = computed(() =>
    this.cart()
      .filter((i) => i.devise === 'FC')
      .reduce((sum, i) => sum + i.prix * i.quantite, 0),
  );

  totalUSD = computed(() =>
    this.cart()
      .filter((i) => i.devise === 'USD')
      .reduce((sum, i) => sum + i.prix * i.quantite, 0),
  );

  paidFC = computed(() =>
    this.billetsFC().reduce((s, b) => s + b.valeur * b.quantite, 0),
  );

  paidUSD = computed(() =>
    this.billetsUSD().reduce((s, b) => s + b.valeur * b.quantite, 0),
  );

  paymentValid = computed(() => {
    const needFC = this.totalFC();
    const needUSD = this.totalUSD();
    if (needFC === 0 && needUSD === 0) return false;
    return this.paidFC() >= needFC - 0.01 && this.paidUSD() >= needUSD - 0.01;
  });

  ngOnInit() {
    this.api.getCaissesAgent().subscribe((c) => this.caisses.set(c));
    this.api.getProduits().subscribe((p) => this.produits.set(p));
    this.api.getPrestations().subscribe((p) => this.prestations.set(p));
  }

  addProduit(p: Produit) {
    if (p.quantite_stock <= 0) {
      this.snack.open('Stock épuisé', 'OK', { duration: 3000 });
      return;
    }
    this.addItem('produit', p.uuid, p.nom, p.prix_unitaire, p.devise);
  }

  addPrestation(p: Prestation) {
    this.addItem('prestation', p.uuid, p.nom, p.prix, p.devise);
  }

  private addItem(type: string, uuid: string, nom: string, prix: number, devise: 'FC' | 'USD') {
    const items = [...this.cart()];
    const existing = items.find((i) => i.item_uuid === uuid);
    if (existing) {
      existing.quantite++;
    } else {
      items.push({ item_type: type, item_uuid: uuid, nom, quantite: 1, prix, devise });
    }
    this.cart.set(items);
  }

  removeItem(index: number) {
    const items = [...this.cart()];
    items.splice(index, 1);
    this.cart.set(items);
  }

  updateBilletFC(index: number, qty: number) {
    const list = [...this.billetsFC()];
    list[index] = { ...list[index], quantite: Math.max(0, qty) };
    this.billetsFC.set(list);
  }

  updateBilletUSD(index: number, qty: number) {
    const list = [...this.billetsUSD()];
    list[index] = { ...list[index], quantite: Math.max(0, qty) };
    this.billetsUSD.set(list);
  }

  resetBillets() {
    this.billetsFC.set(COUPURES_FC.map((v) => ({ valeur: v, devise: 'FC', quantite: 0 })));
    this.billetsUSD.set(COUPURES_USD.map((v) => ({ valeur: v, devise: 'USD', quantite: 0 })));
  }

  private collectBillets(): BilletLigne[] {
    return [...this.billetsFC(), ...this.billetsUSD()]
      .filter((b) => b.quantite > 0)
      .map((b) => ({ valeur: b.valeur, devise: b.devise, quantite: b.quantite }));
  }

  encaisser() {
    const caisse = this.selectedCaisse();
    if (!caisse) return;
    if (caisse.is_locked) {
      this.snack.open('Caisse verrouillée — contactez le manager', 'OK', { duration: 5000 });
      return;
    }
    if (this.cart().length === 0) return;
    if (!this.paymentValid()) {
      this.snack.open('Paiement insuffisant — vérifiez la billetterie', 'OK', { duration: 5000 });
      return;
    }

    this.loading.set(true);
    this.api
      .encaisser({
        caisse_agent_uuid: caisse.uuid,
        type: 'vente',
        client_nom: this.form.value.client_nom || undefined,
        notes: this.form.value.notes || undefined,
        lignes: this.cart().map((i) => ({
          item_type: i.item_type,
          item_uuid: i.item_uuid,
          quantite: i.quantite,
        })),
        billets: this.collectBillets(),
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          this.printData.set(res.print as PrintData);
          this.cart.set([]);
          this.resetBillets();
          this.form.patchValue({ client_nom: '', notes: '' });
          this.snack.open('Encaissement réussi !', 'OK', { duration: 3000 });
          this.api.getCaissesAgent().subscribe((c) => this.caisses.set(c));
          setTimeout(() => window.print(), 500);
        },
        error: (err) => {
          this.loading.set(false);
          this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 });
        },
      });
  }
}
