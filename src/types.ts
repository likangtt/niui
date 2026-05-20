export interface BasicInfo {
  roommateA: string;
  roommateB: string;
  leaseStart: string;
  address: string;
}

export interface Clause {
  id: string;
  text: string;
  enabled: boolean;
  preset: boolean;
}

export interface Signatures {
  signatureA: string;
  signatureB: string;
  dateA: string;
  dateB: string;
}

export type DocumentType = 'roommate' | 'chore' | 'fridge' | 'pet' | 'neighbor' | 'lending' | 'housesitting' | 'shared-expense' | 'carpool';
