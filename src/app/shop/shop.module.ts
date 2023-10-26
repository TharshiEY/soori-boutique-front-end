import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponentComponent } from './view-all-component/view-all-component.component';
import { ViewProductComponentComponent } from './view-product-component/view-product-component.component';



@NgModule({
  declarations: [
    ViewAllComponentComponent,
    ViewProductComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
