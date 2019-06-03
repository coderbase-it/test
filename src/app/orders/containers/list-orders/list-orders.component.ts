import { Component, OnInit, OnDestroy, QueryList } from '@angular/core';

import { Order } from 'src/app/shared/models/order.model';
import { State } from 'src/app/shared/enums/state.enum';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ItemOrderComponent } from '../../components/item-order/item-order.component';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {


  headers: Array<string>;
  private listItems$: QueryList<ItemOrderComponent> = new QueryList();
  orders$: Observable<Order[]>;
  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ordersService.getOrders();
    this.orders$ = this.ordersService.orders$;


    this.headers = [
      'Type',
      'Client',
      'Duration',
      'Total price Duty Free',
      'Total price incl. taxes',
      'State',
      'Action'
    ];
  }

  change(param: {item: Order, state: State}) {

    this.ordersService.update(param.item, param.state);
  }

  action(param: {item: Order, action: string}) {
    if (param.action === 'delete') {
      this.ordersService.delete(param.item);
    }
    if (param.action === 'edit') {
      this.router.navigate(['orders/edit', param.item.id]);
    }
  }

  displayDetail(obj) {
   // this.ordersService.presta$.next(obj);
  }



}
