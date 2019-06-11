import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { State } from 'src/app/shared/enums/state.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  @Input() init = new Order();
  @Output() nItem: EventEmitter<Order> = new EventEmitter();
  @Input() clients: Client[] = [];
  states = State;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    console.log(this.init.state);
    this.form = this.fb.group({

      type: [
        this.init.type,
        Validators.required
      ],
      clientId: [
        this.init.clientId,
        Validators.required
      ],
      duration: [this.init.duration],
      adrDutyFree: [this.init.adrDutyFree],
      vat: [this.init.vat],
      state: [this.init.state],
      comment: [this.init.comment],
    });
  }

  submit() {
    this.nItem.emit(this.form.value);
  }

}
