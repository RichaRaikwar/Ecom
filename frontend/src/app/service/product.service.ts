import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }


  getProducts() {
    return this.httpClient.get('http://localhost:3000/admin/api/products')
  }

  insertProduct(product: any) {
    return this.httpClient.post('http://localhost:3000/admin/api/product/add', product)
  }

  getProductById(id: any) {
    return this.httpClient.get('http://localhost:3000/admin/api/product/' + id)
  }

  updateProduct(id: any, product: any) {
    return this.httpClient.put('http://localhost:3000/admin/api/product/update/' + id, product)
  }

  deleteProduct(id: any) {
    return this.httpClient.delete('http://localhost:3000/admin/api/product/' + id)
  }
}
