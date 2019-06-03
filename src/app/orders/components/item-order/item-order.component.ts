import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { State } from 'src/app/shared/enums/state.enum';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.scss']
})
export class ItemOrderComponent implements OnInit {
  @Input() item: Order;
  @Output() doChange: EventEmitter<any> = new EventEmitter();
  @Output() doAction: EventEmitter<any> = new EventEmitter();
  states = State;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  // TODO states = Object.values(State);
  constructor() {
  }

  ngOnInit() {
  }

  changeState(event) {
    this.doChange.emit(
      {
        item: this.item,
        state: event.target.value
      }
    );
  }

  action(param) {
    this.doAction.emit(
      {
        item: this.item,
        action: param
      }
    );
  }

}
