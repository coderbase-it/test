import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  }, {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule',
  }, {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

