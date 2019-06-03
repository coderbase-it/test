import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit {
  txtButton = 'Add a order';
  constructor() { }

  ngOnInit() {
  }

}
