import { Component, OnInit, Input } from '@angular/core';
import { AbstractData } from '../../abstract/abstract-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-b',
  templateUrl: './template-b.component.html',
  styleUrls: ['./template-b.component.scss']
})
export class TemplateBComponent extends AbstractData implements OnInit {


  constructor(protected route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
  }

}
