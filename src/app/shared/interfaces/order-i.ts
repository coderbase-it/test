import { State } from '../enums/state.enum';
import { Client } from '../models/client.model';

export interface OrderI {
  id: string;
  type: string;
  clientId: string;
  duration: number;
  adrDutyFree: number;
  vat: number;
  state: State;
  comment: string;
  client?: Client;
  totalDutyFree(): number;
  totalWithTaxes(): number;
}
