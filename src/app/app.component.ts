import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Strategy On Push Activate on App Component
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
