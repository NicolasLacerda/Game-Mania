import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //Produtos
  products: Product[] = [
    new Product(1, 'Product 1', 'Thunai thunflay', 100),
    new Product(2, 'Product 2', 'Thunai thunflay', 150),
    new Product(3, 'Product 3', 'Thunai thunflay', 50),
    new Product(4, 'Product 4', 'Thunai thunflay', 200),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
