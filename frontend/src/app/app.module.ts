import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CategoryComponent } from './home/category/category.component';
import { HeaderComponent } from './home/header/header.component';
import { LatestProductsComponent } from './home/latest-products/latest-products.component';
import { OffersComponent } from './home/offers/offers.component';
import { TopBrandsComponent } from './home/top-brands/top-brands.component';
import { HomeComponent } from './home/home.component';
import { AdminViewProductComponent } from './admin/admin-view-product/admin-view-product.component';

import { UserProductDetailsComponent } from './user-product-details/user-product-details.component';
import { ProductDescriptionComponent } from './user-product-details/product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    NavbarComponent,

    HomeComponent,
    HeaderComponent,
    LatestProductsComponent,
    OffersComponent,
    TopBrandsComponent,
    CategoryComponent,
    FooterComponent,

    UserProductDetailsComponent,
    ProductDescriptionComponent,
    AdminViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
