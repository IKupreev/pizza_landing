import { Product } from './../shared/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  eats: Product[] = [];
  counter: number = 0;
  constructor() { }

  addToCart(product: Product) {
    this.eats.push(product);
    this.counter++;
  }

  getItems() {
    return this.eats;
  }

  clearCart() {
    this.eats = [];
    this.counter = 0;
    return this.eats;
  }
}
