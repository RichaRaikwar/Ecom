import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {
   constructor(private productService:ProductService,private route:ActivatedRoute) { }

   product: any;
  id: any;

  ngOnInit(): void {
     this.id = this.route.snapshot.params.id;
    this.getProductData();
  }

  getProductData() {
    this.productService.getProductById(this.id).subscribe(res => {
      this.product = res;
    })
  }



}
