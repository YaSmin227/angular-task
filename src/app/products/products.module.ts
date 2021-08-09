import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsShowComponent } from './products-show/products-show.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsShowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
