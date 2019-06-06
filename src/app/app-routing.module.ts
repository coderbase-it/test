import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { environment } from '../environments/environment';

// Application Route
// Lazy loading Angular 8 new pattern
const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    data : { position : 'nav', name: 'Clients'},
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
  }, {
    path: 'orders',
    data : { position : 'nav', name: 'Orders'},
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  }, {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // Tracing active on every environment except prod
        // enableTracing: !environment.production,
        // Strategy PrelaodAllModule for preloading Lazy Loading Module After AppModule is load
        preloadingStrategy: PreloadAllModules
      }
    )
  ]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // Code from angular.io for displaying route config
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

