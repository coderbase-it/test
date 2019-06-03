import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { State } from 'src/app/shared/enums/state.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  states = State;
  form: FormGroup;
  @Input() init = new Order();
  @Output() nItem: EventEmitter<Order> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      type: [
        this.init.type,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
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
