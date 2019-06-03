import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  add(item: Order) {
    this.ordersService.add(item)
    // res serait la reponse de l'api
    // this.router.navigate(['orders']);
    this.router.navigate(['../'], { relativeTo: this.route });

  }


}
