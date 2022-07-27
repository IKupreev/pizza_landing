import { Product } from './../shared/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  eats: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.eats.push(product);
  }

  getItems() {
    return this.eats;
  }

  clearCart() {
    this.eats = [];
    return this.eats;
  }
}
