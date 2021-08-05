import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-view-product',
  templateUrl: './admin-view-product.component.html',
  styleUrls: ['./admin-view-product.component.css']
})
export class AdminViewProductComponent implements OnInit {

  product: any;
  id: any;

  constructor(private productService: ProductService, private route: ActivatedRoute,) { }

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
