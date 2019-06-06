import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private router: Router) { }
  links = [];
  ngOnInit() {
    this.router.config.forEach((route: Route) => {
        if ( route && route.data && route.data.position === 'nav' ) {
         this.links.push(route);
        }
    });
  }

}
