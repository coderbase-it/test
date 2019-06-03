import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  id: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      // console.log(data.get('id'));
      this.id = data.get('id');
    });
  }

}
