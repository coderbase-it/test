import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
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
