import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { CommentOrderComponent } from './components/comment-order/comment-order.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageOrdersComponent,
    data: {title: 'Orders', label: 'list of orders'},
    children: [
      {path: 'detail', component: DetailOrderComponent},
      {path: 'comment', component: CommentOrderComponent}
    ]
  },
  {
    path: 'add',
    component: PageAddOrderComponent,
    data: {title: 'Orders', label: 'Add a order'}
  },
  {
    path: 'edit/:id',
    component: PageEditOrderComponent,
    data: {title: 'Orders', label: 'Edit a order'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class OrdersRoutingModule { }
