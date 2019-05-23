import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './components/tableau/tableau.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, TemplatesModule],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
