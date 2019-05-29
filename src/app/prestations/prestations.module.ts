import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PagePrestationsComponent, ListPrestationsComponent, ItemPrestationComponent, PageAddPrestationComponent, AddPrestationComponent, FormPrestationComponent, DetailPrestationComponent, CommentPrestationComponent, PageEditPrestationComponent, EditPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
  ]
})
export class PrestationsModule { }
