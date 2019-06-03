import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { ActionComponent } from './components/action/action.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { LinksComponent } from './components/links/links.component';

@NgModule({
  declarations: [TotalPipe, StateDirective,
    TableauComponent, ButtonAddComponent,
    ActionComponent, LinksComponent],
  exports: [TotalPipe, StateDirective,
    TableauComponent, ButtonAddComponent,
    ActionComponent, LinksComponent,
    TemplatesModule, ReactiveFormsModule, RouterModule],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    NgbPopoverModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
