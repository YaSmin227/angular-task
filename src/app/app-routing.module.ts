import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'customer',loadChildren:()=> import ('./customer/cutomer-routing.module').then(m=> m.CutomerRoutingModule)},
  {path:'product', loadChildren:()=> import ('./products/products-routing.module').then(m=>m.ProductsRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
