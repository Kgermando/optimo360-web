export interface User {
  uuid: string;
  full_name: string;
  email: string;
  phone: string;
  role: 'super_admin' | 'admin' | 'manager' | 'agent';
  status: string;
  entreprise_uuid?: string;
  entreprise?: Entreprise;
}

export interface Entreprise {
  uuid: string;
  name: string;
  rccm: string;
  idnat: string;
  nimpot: string;
  adresse: string;
  telephone: string;
  email: string;
  website?: string;
  logo?: string;
  status: string;
  users?: User[];
}

export type AdhesionStatus = 'pending' | 'reviewed' | 'accepted' | 'rejected';

export interface DemandeAdhesion {
  uuid: string;
  created_at: string;
  updated_at: string;
  contact_name: string;
  email: string;
  phone: string;
  company_name: string;
  rccm: string;
  idnat: string;
  nimpot: string;
  adresse: string;
  website: string;
  secteur_activite: string;
  nb_employes: number;
  nb_caisses: number;
  message: string;
  status: AdhesionStatus;
  admin_notes?: string;
}

export interface SubmitAdhesionPayload {
  contact_name: string;
  email: string;
  phone: string;
  company_name: string;
  rccm?: string;
  idnat?: string;
  nimpot?: string;
  adresse: string;
  website?: string;
  secteur_activite?: string;
  nb_employes?: number;
  nb_caisses?: number;
  message: string;
}

export interface CaisseMain {
  uuid: string;
  nom: string;
  description: string;
  solde_fc: number;
  solde_usd: number;
  manager_uuid: string;
  manager?: User;
}

export interface CaisseAgent {
  uuid: string;
  nom: string;
  solde_fc: number;
  solde_usd: number;
  seuil_fc: number;
  seuil_usd: number;
  is_locked: boolean;
  locked_at?: string;
  agent_uuid: string;
  agent?: User;
  caisse_main_uuid: string;
}

export interface BilletLigne {
  valeur: number;
  devise: 'FC' | 'USD';
  quantite: number;
}

export interface BilletterieResume {
  caisse_uuid: string;
  caisse_type: string;
  solde_fc: number;
  solde_usd: number;
  billets: BilletLigne[];
}

export interface Coupure {
  Valeur: number;
  Devise: string;
}

export interface Produit {
  uuid: string;
  code: string;
  nom: string;
  description?: string;
  prix_unitaire: number;
  devise: 'FC' | 'USD';
  quantite_stock: number;
  unite: string;
  status: string;
}

export interface Prestation {
  uuid: string;
  code: string;
  nom: string;
  description?: string;
  prix: number;
  devise: 'FC' | 'USD';
  status: string;
}

export interface OperationLigne {
  uuid?: string;
  item_type: string;
  item_uuid: string;
  item_nom: string;
  quantite: number;
  prix_unitaire: number;
  montant: number;
  devise: string;
}

export interface Operation {
  uuid: string;
  reference: string;
  type: string;
  montant_fc: number;
  montant_usd: number;
  client_nom?: string;
  notes?: string;
  created_at: string;
  agent?: User;
  lignes?: OperationLigne[];
  billets?: BilletLigne[];
}

export interface JournalEntry {
  uuid: string;
  action: string;
  entity_type: string;
  entity_uuid: string;
  description: string;
  details?: string;
  created_at: string;
  user?: User;
}

export interface ChartPoint {
  date: string;
  fc: number;
  usd: number;
  total: number;
}

export interface ChartLabelValue {
  label: string;
  value: number;
}

export interface AgentPerformance {
  nom: string;
  total_fc: number;
  total_usd: number;
  nb_ops: number;
}

export interface CaisseAgentSummary {
  uuid: string;
  nom: string;
  agent: string;
  solde_fc: number;
  solde_usd: number;
  is_locked: boolean;
}

export interface OperationSummary {
  reference: string;
  agent: string;
  montant_fc: number;
  montant_usd: number;
  created_at: string;
}

export interface DashboardStats {
  total_encaissements_fc: number;
  total_encaissements_usd: number;
  nb_operations: number;
  caisses_verrouillees: number;
  solde_main_fc: number;
  solde_main_usd: number;
  solde_agents_fc: number;
  solde_agents_usd: number;
  nb_agents: number;
  nb_entreprises?: number;
  encaissements_par_jour: ChartPoint[];
  repartition_devises: ChartLabelValue[];
  top_agents: AgentPerformance[];
  billetterie_main?: BilletterieResume;
  caisses_agent: CaisseAgentSummary[];
  operations_recentes: OperationSummary[];
}

export interface CreateEntreprisePayload {
  name: string;
  rccm: string;
  idnat: string;
  nimpot: string;
  adresse: string;
  telephone: string;
  email: string;
  website?: string;
  admin_full_name: string;
  admin_email: string;
  admin_phone: string;
  admin_password: string;
}

export interface CreateEntrepriseResponse {
  entreprise: Entreprise;
  admin: User;
}

export interface OTPResponse {
  uuid: string;
  caisse_agent_uuid: string;
  type: string;
  expires_at: string;
  code?: string;
}

export interface PrintLigne {
  nom: string;
  quantite: number;
  prix: number;
  montant: number;
  devise: string;
}

export interface PrintData {
  reference: string;
  type: string;
  date: string;
  entreprise: string;
  agent: string;
  client: string;
  lignes: PrintLigne[];
  montant_fc: number;
  montant_usd: number;
  billets?: BilletLigne[];
  notes?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface Parametre {
  uuid: string;
  entreprise_uuid?: string | null;
  otp_expiration_minutes: number;
  otp_code_length: number;
  jwt_expiration_hours: number;
  password_min_length: number;
  journal_page_size: number;
  default_seuil_fc: number;
  default_seuil_usd: number;
}

export const COUPURES_FC = [500, 1000, 2000, 5000, 10000, 20000];
export const COUPURES_USD = [1, 5, 10, 20, 50, 100];
export const DEVISES = ['FC', 'USD'] as const;
export type Devise = (typeof DEVISES)[number];

export const PRODUCT_UNITS = [
  { value: 'unité', label: 'Unité (pièce)' },
  { value: 'kg', label: 'Kilogramme (kg)' },
  { value: 'g', label: 'Gramme (g)' },
  { value: 'L', label: 'Litre (L)' },
  { value: 'mL', label: 'Millilitre (mL)' },
  { value: 'm', label: 'Mètre (m)' },
  { value: 'cm', label: 'Centimètre (cm)' },
  { value: 'paquet', label: 'Paquet' },
  { value: 'carton', label: 'Carton' },
  { value: 'boîte', label: 'Boîte' },
  { value: 'sac', label: 'Sac' },
  { value: 'bouteille', label: 'Bouteille' },
  { value: 'lot', label: 'Lot' },
] as const;
