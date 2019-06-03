import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ItemOrderComponent } from './components/item-order/item-order.component';
import { ListOrdersComponent } from './containers/list-orders/list-orders.component';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { AddOrderComponent } from './containers/add-order/add-order.component';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';
import { CommentOrderComponent } from './components/comment-order/comment-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { EditOrderComponent } from './containers/edit-order/edit-order.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PageOrdersComponent, ListOrdersComponent, ItemOrderComponent, PageAddOrderComponent, AddOrderComponent, FormOrderComponent, DetailOrderComponent, CommentOrderComponent, PageEditOrderComponent, EditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
  ]
})
export class OrdersModule { }
