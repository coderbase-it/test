import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  clients$: Observable<Client[]>;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute,
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
    this.clientsService.getClients();
    this.clients$ = this.clientsService.clients$;
  }

  add(item: Order) {
    this.ordersService.add(item).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
