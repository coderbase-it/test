import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  // TODO why ?
  encapsulation: ViewEncapsulation.None
})
export class TableauComponent implements OnInit {
  @Input() headers: string[];
  constructor() { }

  ngOnInit() {
  }

}
