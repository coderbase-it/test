import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [TotalPipe, StateDirective],
  exports: [TotalPipe, StateDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
