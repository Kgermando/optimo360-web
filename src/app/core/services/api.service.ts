import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  BilletterieResume,
  BilletLigne,
  CaisseAgent,
  CaisseMain,
  CreateEntreprisePayload,
  CreateEntrepriseResponse,
  DashboardStats,
  Entreprise,
  JournalEntry,
  Operation,
  OTPResponse,
  Prestation,
  Produit,
  User,
} from '../models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDashboardStats() {
    return this.http.get<DashboardStats>(`${this.base}/dashboard/stats`);
  }

  getEntreprises() {
    return this.http.get<Entreprise[]>(`${this.base}/entreprises`);
  }
  createEntreprise(data: CreateEntreprisePayload) {
    return this.http.post<CreateEntrepriseResponse>(`${this.base}/entreprises`, data);
  }

  getUsers(entrepriseUuid?: string) {
    let params = new HttpParams();
    if (entrepriseUuid) params = params.set('entreprise_uuid', entrepriseUuid);
    return this.http.get<User[]>(`${this.base}/users`, { params });
  }
  createUser(data: Partial<User> & { password: string }) {
    return this.http.post<User>(`${this.base}/users`, data);
  }
  updateUserStatus(uuid: string, status: string) {
    return this.http.patch(`${this.base}/users/${uuid}/status`, { status });
  }

  getCaissesMain() {
    return this.http.get<CaisseMain[]>(`${this.base}/caisses/main`);
  }
  createCaisseMain(data: { nom: string; description?: string; manager_uuid: string }) {
    return this.http.post<CaisseMain>(`${this.base}/caisses/main`, data);
  }
  getCaissesAgent() {
    return this.http.get<CaisseAgent[]>(`${this.base}/caisses/agent`);
  }
  createCaisseAgent(data: {
    nom: string;
    agent_uuid: string;
    caisse_main_uuid: string;
    seuil_fc: number;
    seuil_usd: number;
  }) {
    return this.http.post<CaisseAgent>(`${this.base}/caisses/agent`, data);
  }
  updateCaisseSeuil(uuid: string, seuilFc: number, seuilUsd: number) {
    return this.http.patch(`${this.base}/caisses/agent/${uuid}/seuil`, {
      seuil_fc: seuilFc,
      seuil_usd: seuilUsd,
    });
  }
  getBilletterie(caisseUuid: string, type: 'agent' | 'main' = 'agent') {
    return this.http.get<BilletterieResume>(`${this.base}/caisses/${caisseUuid}/billetterie`, {
      params: { type },
    });
  }
  transferCaisse(caisseAgentUuid: string, notes?: string) {
    return this.http.post(`${this.base}/caisses/transfert`, {
      caisse_agent_uuid: caisseAgentUuid,
      notes,
    });
  }
  unlockCaisse(caisseAgentUuid: string, otpCode: string) {
    return this.http.post(`${this.base}/caisses/unlock`, {
      caisse_agent_uuid: caisseAgentUuid,
      otp_code: otpCode,
    });
  }
  retrait(data: {
    caisse_agent_uuid: string;
    montant: number;
    devise: string;
    motif: string;
    otp_code: string;
    billets: BilletLigne[];
  }) {
    return this.http.post(`${this.base}/caisses/retrait`, data);
  }

  generateUnlockOTP(caisseAgentUuid: string) {
    return this.http.post<OTPResponse>(`${this.base}/otp/unlock`, {
      caisse_agent_uuid: caisseAgentUuid,
    });
  }
  generateRetraitOTP(caisseAgentUuid: string, montant: number, devise: string) {
    return this.http.post<OTPResponse>(`${this.base}/otp/retrait`, {
      caisse_agent_uuid: caisseAgentUuid,
      montant,
      devise,
    });
  }

  getProduits() {
    return this.http.get<Produit[]>(`${this.base}/produits`);
  }
  createProduit(data: Partial<Produit>) {
    return this.http.post<Produit>(`${this.base}/produits`, data);
  }
  getPrestations() {
    return this.http.get<Prestation[]>(`${this.base}/prestations`);
  }
  createPrestation(data: Partial<Prestation>) {
    return this.http.post<Prestation>(`${this.base}/prestations`, data);
  }

  encaisser(data: {
    caisse_agent_uuid: string;
    type: string;
    client_nom?: string;
    notes?: string;
    lignes: { item_type: string; item_uuid: string; quantite: number }[];
    billets: BilletLigne[];
  }) {
    return this.http.post<{ operation: Operation; print: unknown; print_html: string }>(
      `${this.base}/operations/encaisser`,
      data,
    );
  }
  getOperations() {
    return this.http.get<Operation[]>(`${this.base}/operations`);
  }
  getOperationPrint(uuid: string) {
    return this.http.get<{ print: unknown; print_html: string }>(
      `${this.base}/operations/${uuid}/print`,
    );
  }

  getJournal(limit = 50, offset = 0, entrepriseUuid?: string) {
    let params = new HttpParams().set('limit', limit).set('offset', offset);
    if (entrepriseUuid) params = params.set('entreprise_uuid', entrepriseUuid);
    return this.http.get<{ data: JournalEntry[]; total: number }>(`${this.base}/journal`, {
      params,
    });
  }
}
