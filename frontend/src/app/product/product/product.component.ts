import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  data: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  deleteData(id: any) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.data = res;
      this.getProductsData();
    });
  }

}
