import { Component, VERSION } from '@angular/core';
import { CDMon } from 'ngx-cdmon';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  //  Use for displaying Angular Version
  public version = VERSION.full;
  constructor(cdmon: CDMon) {
    cdmon.enable();
  }
}
