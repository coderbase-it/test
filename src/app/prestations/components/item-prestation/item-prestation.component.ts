import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  @Output() doChange: EventEmitter<any> = new EventEmitter();
  states = State;
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

}
