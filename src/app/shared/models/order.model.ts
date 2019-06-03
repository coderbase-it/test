import { OrderI } from '../interfaces/order-i';
import { State } from '../enums/state.enum';

export class Order implements OrderI {
  id: string;
  client: { id: string, name: string } ;
  type: string;
  duration = 1;
  adrDutyFree = 500;
  vat = 20;
  state = State.OPTION;
  comment: string;
  constructor(fields?: Partial<Order>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalDutyFree(): number {

    return this.adrDutyFree * this.duration;
  }
  totalWithTaxes(vat?: number): number {

    if (vat) {
      if (vat <= 0) {
        return this.totalDutyFree();
      }
      return this.totalDutyFree() * (1 + vat / 100);
    }
    return this.totalDutyFree() * (1 + this.vat / 100);
  }
}
