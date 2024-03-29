import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent , data : { position : 'nav', name: 'Login'}}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class LoginRoutingModule { }
