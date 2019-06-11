import { OrderI } from '../interfaces/order-i';
import { State } from '../enums/state.enum';
import { Client } from './client.model';

export class Order implements OrderI {
  id: string;
  clientId: string ;
  client: Client;
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
    let finalVat;
    if (vat) {
      finalVat = vat;
    } else {
      finalVat = this.vat;
    }

    if (finalVat <= 0) {
      return this.totalDutyFree();
    } else {
      return this.totalDutyFree() * (1 + finalVat / 100);
    }


  }
}
