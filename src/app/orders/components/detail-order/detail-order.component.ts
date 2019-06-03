import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {
  order$: Observable<Order>;
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.order$ = this.ordersService.orderSelected$;
  }

}
