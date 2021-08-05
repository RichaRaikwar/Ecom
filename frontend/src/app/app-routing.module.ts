import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product/product.component';
import { UserProductDetailsComponent } from './user-product-details/user-product-details.component';



const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'userProductDetail' , component:UserProductDetailsComponent
  }
  // {
  //   path: 'admin/products', component: ProductComponent
  // },
  // {
  //   path: 'edit/:id', component: EditEmployeeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
