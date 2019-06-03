import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  maPresta$: Observable<Order>;
  @Input() prestaId: string;
  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.maPresta$ = this.ordersService.getOrder(this.prestaId);
  }

  update(item: Order) {
    item.id = this.prestaId;
    this.ordersService.update(item)
      // res serait la reponse de l'api
      // this.router.navigate(['orders']);
    this.router.navigate(['../../'], {relativeTo: this.route});

  }

}
