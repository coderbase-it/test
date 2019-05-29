import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: {title: 'Prestations', label: 'Liste des prestations'},
    children: [
      {path: 'detail', component: DetailPrestationComponent},
      {path: 'comment', component: CommentPrestationComponent},
    ]
  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: {title: 'Prestations', label: 'Ajouter une prestation'}
  },
  {
    path: 'edit/:id',
    component: PageEditPrestationComponent,
    data: {title: 'Prestations', label: 'Editer une prestation'}
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
