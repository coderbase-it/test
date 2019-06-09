import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';
import { CDMon, TickTimer, TICK_REPORTERS } from 'ngx-cdmon';
// loading angular localeFr
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
  ],
  // provide LOCALE_ID use by Angular Pipes internally
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    CDMon,
    { provide: TICK_REPORTERS, multi: true, useClass: TickTimer }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
