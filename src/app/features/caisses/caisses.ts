import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import {
  BilletterieResume,
  BilletLigne,
  CaisseAgent,
  CaisseMain,
  COUPURES_FC,
  COUPURES_USD,
} from '../../core/models';

@Component({
  selector: 'app-caisses',
  imports: [
    DatePipe,
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
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
  templateUrl: './caisses.html',
  styleUrl: './caisses.scss',
})
export class CaissesComponent implements OnInit {
  private api = inject(ApiService);
  auth = inject(AuthService);
  private snack = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  caissesAgent = signal<CaisseAgent[]>([]);
  caissesMain = signal<CaisseMain[]>([]);
  loading = signal(true);
  showUnlockDialog = signal(false);
  showRetraitDialog = signal(false);
  showBilletterieDialog = signal(false);
  selectedCaisse = signal<CaisseAgent | null>(null);
  billetterie = signal<BilletterieResume | null>(null);
  generatedOTP = signal('');

  retraitDevise = signal<'FC' | 'USD'>('FC');
  retraitBilletsFC = signal<{ valeur: number; quantite: number }[]>(
    COUPURES_FC.map((v) => ({ valeur: v, quantite: 0 })),
  );
  retraitBilletsUSD = signal<{ valeur: number; quantite: number }[]>(
    COUPURES_USD.map((v) => ({ valeur: v, quantite: 0 })),
  );

  unlockForm = this.fb.group({ otp_code: ['', Validators.required] });
  retraitForm = this.fb.group({
    montant: [0, [Validators.required, Validators.min(1)]],
    motif: ['', Validators.required],
    otp_code: ['', Validators.required],
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.api.getCaissesAgent().subscribe({
      next: (c) => {
        this.caissesAgent.set(c);
        this.loading.set(false);
      },
    });
    if (this.auth.hasRole('admin', 'manager')) {
      this.api.getCaissesMain().subscribe((c) => this.caissesMain.set(c));
    }
  }

  hasSolde(c: CaisseAgent): boolean {
    return c.solde_fc > 0 || c.solde_usd > 0;
  }

  transfer(c: CaisseAgent) {
    const msg = `Transférer ${c.solde_fc} FC + ${c.solde_usd} USD de ${c.nom} vers la caisse principale ?`;
    if (!confirm(msg)) return;
    this.api.transferCaisse(c.uuid).subscribe({
      next: () => {
        this.snack.open('Transfert effectué', 'OK', { duration: 3000 });
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
    });
  }

  viewBilletterie(c: CaisseAgent) {
    this.selectedCaisse.set(c);
    this.api.getBilletterie(c.uuid, 'agent').subscribe({
      next: (b) => {
        this.billetterie.set(b);
        this.showBilletterieDialog.set(true);
      },
      error: () => this.snack.open('Erreur chargement billetterie', 'OK', { duration: 3000 }),
    });
  }

  viewMainBilletterie(m: CaisseMain) {
    this.api.getBilletterie(m.uuid, 'main').subscribe({
      next: (b) => {
        this.billetterie.set(b);
        this.showBilletterieDialog.set(true);
      },
    });
  }

  generateUnlockOTP(c: CaisseAgent) {
    this.api.generateUnlockOTP(c.uuid).subscribe({
      next: (otp) => {
        this.generatedOTP.set(otp.code || '');
        this.snack.open(`OTP généré: ${otp.code} (expire dans 5 min)`, 'OK', { duration: 10000 });
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
    });
  }

  openUnlock(c: CaisseAgent) {
    this.selectedCaisse.set(c);
    this.showUnlockDialog.set(true);
  }

  unlock() {
    const c = this.selectedCaisse();
    if (!c || this.unlockForm.invalid) return;
    this.api.unlockCaisse(c.uuid, this.unlockForm.value.otp_code!).subscribe({
      next: () => {
        this.snack.open('Caisse déverrouillée !', 'OK', { duration: 3000 });
        this.showUnlockDialog.set(false);
        this.unlockForm.reset();
        this.load();
      },
      error: (err) => this.snack.open(err.error?.error || 'OTP invalide', 'OK', { duration: 5000 }),
    });
  }

  openRetrait(c: CaisseAgent) {
    this.selectedCaisse.set(c);
    this.retraitDevise.set('FC');
    this.retraitBilletsFC.set(COUPURES_FC.map((v) => ({ valeur: v, quantite: 0 })));
    this.retraitBilletsUSD.set(COUPURES_USD.map((v) => ({ valeur: v, quantite: 0 })));
    this.showRetraitDialog.set(true);
  }

  retraitBilletTotal(): number {
    const devise = this.retraitDevise();
    const list = devise === 'FC' ? this.retraitBilletsFC() : this.retraitBilletsUSD();
    return list.reduce((s, b) => s + b.valeur * b.quantite, 0);
  }

  updateRetraitBillet(index: number, qty: number) {
    const devise = this.retraitDevise();
    if (devise === 'FC') {
      const list = [...this.retraitBilletsFC()];
      list[index] = { ...list[index], quantite: Math.max(0, qty) };
      this.retraitBilletsFC.set(list);
    } else {
      const list = [...this.retraitBilletsUSD()];
      list[index] = { ...list[index], quantite: Math.max(0, qty) };
      this.retraitBilletsUSD.set(list);
    }
    this.retraitForm.patchValue({ montant: this.retraitBilletTotal() });
  }

  hasBillets(): boolean {
    return !!this.billetterie()?.billets.some((x) => x.quantite > 0);
  }

  requestRetraitOTP() {
    const c = this.selectedCaisse();
    const montant = this.retraitBilletTotal() || this.retraitForm.value.montant;
    const devise = this.retraitDevise();
    if (!c || !montant) return;
    this.api.generateRetraitOTP(c.uuid, montant, devise).subscribe({
      next: (otp) => {
        this.generatedOTP.set(otp.code || '');
        this.snack.open(`OTP retrait: ${otp.code}`, 'OK', { duration: 10000 });
      },
      error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
    });
  }

  collectRetraitBillets(): BilletLigne[] {
    const devise = this.retraitDevise();
    const list = devise === 'FC' ? this.retraitBilletsFC() : this.retraitBilletsUSD();
    return list
      .filter((b) => b.quantite > 0)
      .map((b) => ({ valeur: b.valeur, devise, quantite: b.quantite }));
  }

  retrait() {
    const c = this.selectedCaisse();
    if (!c || this.retraitForm.invalid) return;
    const montant = this.retraitBilletTotal() || this.retraitForm.value.montant!;
    const billets = this.collectRetraitBillets();
    if (!billets.length) {
      this.snack.open('Indiquez les billets à retirer', 'OK', { duration: 3000 });
      return;
    }
    this.api
      .retrait({
        caisse_agent_uuid: c.uuid,
        montant,
        devise: this.retraitDevise(),
        motif: this.retraitForm.value.motif!,
        otp_code: this.retraitForm.value.otp_code!,
        billets,
      })
      .subscribe({
        next: () => {
          this.snack.open('Retrait effectué', 'OK', { duration: 3000 });
          this.showRetraitDialog.set(false);
          this.retraitForm.reset();
          this.load();
        },
        error: (err) => this.snack.open(err.error?.error || 'Erreur', 'OK', { duration: 5000 }),
      });
  }
}
