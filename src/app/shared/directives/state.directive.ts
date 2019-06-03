import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';
import { StateClient } from '../enums/state-client.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State | StateClient;
  @HostBinding('class') nomClass: string;

  constructor() {
  }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: State | StateClient): string {
    return `state-${state.toLowerCase()}`;
  }

}

// appState vaut Cancel => state-cancel
// appState vaut Option => state-option
// appState vaut Confirm => state-confirm
// res fn donner cette value à l'attribut class de mon host element
