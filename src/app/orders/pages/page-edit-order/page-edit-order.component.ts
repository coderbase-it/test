import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public id: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // TODO paramMap or params ?

    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
    });
  }

}
