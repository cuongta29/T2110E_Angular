import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Listproduct2Component} from "./component/listproduct/listproduct2.component";
import {CreateProductComponent} from "./component/create-product/create-product.component";

const routes: Routes = [
  { path: 'list-product', component: Listproduct2Component },
  { path: 'create-product', component: CreateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
