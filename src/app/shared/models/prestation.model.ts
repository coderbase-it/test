import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  client: string;
  typePresta: string;
  nbJours = 1;
  tjmHt = 500;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;
  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalHt(): number {

    return this.tjmHt * this.nbJours;
  }
  totalTtc(tva?: number): number {

    if (tva) {
      if (tva <= 0) {
        return this.totalHt();
      }
      return this.totalHt() * (1 + tva / 100);
    }
    return this.totalHt() * (1 + this.tauxTva / 100);
  }
}
