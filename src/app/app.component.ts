import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CDMon } from 'ngx-cdmon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Strategy On Push Activate on App Component
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(cdmon: CDMon) {
    cdmon.enable();
  }
}
