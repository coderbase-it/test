import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  order$: Observable<Order>;
  @Input() orderId: string;
  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.order$ = this.ordersService.getOrder(this.orderId);
  }

  update(item: Order) {
    item.id = this.orderId;
    this.ordersService.update(item).subscribe(() => {
      this.router.navigate(['../../'], {relativeTo: this.route});
    });


  }

}
