import { Component, OnInit, Input } from '@angular/core';
import { AbstractData } from '../../abstract/abstract-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent extends AbstractData implements OnInit {


  constructor(protected route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
  }

}
