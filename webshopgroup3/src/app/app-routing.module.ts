import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './page/bill/bill.component';
import { CustomerComponent } from './page/customer/customer.component';
import { HomeComponent } from './page/home/home.component';
import { OrderEditorComponent } from './page/order-editor/order-editor.component';
import { OrderComponent } from './page/order/order.component';
import { ProductComponent } from './page/product/product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'bill',
    component: BillComponent
  },
  {
    path: 'order-editor/:id',
    component: OrderEditorComponent
  },
  {
    path: 'bill-editor/:id',
    component: OrderEditorComponent
  },
  {
    path: 'customer-editor/:id',
    component: OrderEditorComponent
  },
  {
    path: 'product-editor/:id',
    component: OrderEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
