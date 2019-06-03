import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Order, args?: any): number {
    if (value) {
      if (args) {
        return value.totalWithTaxes(args);
      }
      return value.totalDutyFree();
    }
    return null;
  }

}
