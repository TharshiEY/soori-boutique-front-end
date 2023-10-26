import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllComponentComponent } from './view-all-component/view-all-component.component';
import { ViewProductComponentComponent } from './view-product-component/view-product-component.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ViewAllComponentComponent,
    children: [
      {
        path: 'product',
        component: ViewProductComponentComponent
      },
    ],
  },
],

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
