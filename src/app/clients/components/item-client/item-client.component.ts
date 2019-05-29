import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {

  @Input() item: Client;
  @Output() doChange: EventEmitter<any> = new EventEmitter();
  @Output() doAction: EventEmitter<any> = new EventEmitter();

  states = StateClient;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  // states = Object.values(State);
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
