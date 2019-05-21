import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoderbaseUiModule } from '@coderbase/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';

@NgModule({
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoderbaseUiModule
  ]
})
export class UiModule { }
