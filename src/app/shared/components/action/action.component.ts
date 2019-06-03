import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  faEllipsisV = faEllipsisV;
  @Input() actions: Array<{icon: IconDefinition, fn: string}>;
  @Output() doAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  action(fn) {
    this.doAction.emit(fn);
  }

}
