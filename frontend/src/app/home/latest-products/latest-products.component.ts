import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {
   constructor(private productService:ProductService) { }

  product: any;
  latestProduct :any = [];
  ngOnInit(): void {
    this.getProductData();
  }

  getProductData() {
    this.productService.getProducts().subscribe(res => {
      this.product = res;
      console.log(res)
      for(let i=0;i<4;i++){
        this.latestProduct.push(this.product[i]);
      }
      console.log(this.latestProduct)
    })

  // for(let i=0;i<4;i++){
  //   this.latestProduct.push(this.product[i]);
  // }


  }



}
