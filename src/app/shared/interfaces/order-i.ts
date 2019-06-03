import { State } from '../enums/state.enum';

export interface OrderI {
  id: string;
  type: string;
  client: {id: string, name: string } ;
  duration: number;
  adrDutyFree: number;
  vat: number;
  state: State;
  comment: string;
  totalDutyFree(): number;
  totalWithTaxes(): number;
}
