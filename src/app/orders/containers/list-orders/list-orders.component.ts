import { Component, OnInit, OnDestroy, QueryList } from '@angular/core';

import { Order } from 'src/app/shared/models/order.model';
import { State } from 'src/app/shared/enums/state.enum';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemOrderComponent } from '../../components/item-order/item-order.component';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  public headers: Array<string>;
  public orders$: Observable<Order[]>;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ordersService.getOrders();
    this.orders$ = this.ordersService.orders$;


    this.headers = [
      'Type',
      'Client',
      'Duration',
      'Total excl. VAT',
      'Total incl. VAT',
      'State',
      'Action'
    ];
  }

  change(param: {item: Order, state: State}) {
    param.item.state = param.state;
    this.ordersService.update(new Order(param.item)).subscribe();
  }

  action(param: {item: Order, action: string}) {
    if (param.action === 'delete') {
      this.ordersService.delete(param.item);
    }
    if (param.action === 'edit') {
      this.router.navigate(['orders/edit', param.item.id]);
    }
  }

  displayDetail(order: Order) {

    this.ordersService.selectOrder(order);
    this.router.navigate(['detail'], {relativeTo: this.route});
    window.scrollTo(0, document.body.scrollHeight);
  }



}
