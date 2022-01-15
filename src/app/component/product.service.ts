import { Injectable } from '@angular/core';

const PRODUCTS = [
  { productName: 'HTML', productPrice: 1234 },
  { productName: 'RUBY ON RAILS', productPrice: 4444 },
  { productName: 'ANGULAR', productPrice: 3333 },
  { productName: 'JQUERY', productPrice: 5555 },
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(PRODUCTS));
  }

  delete(productName: any) {
    return new Promise(resolve => {
      const index = PRODUCTS.findIndex(todo => todo.productName === productName);
      PRODUCTS.splice(index, 1);
      resolve(true);
    });
  }
}
