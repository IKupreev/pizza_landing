import { Pizza } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  eats: Pizza[] = [];
  count = 0;
  sum = 0;
  productCounter: BehaviorSubject<number> = new BehaviorSubject(0);


  addToCart(pizza: Pizza) {
    const idx = this.eats.findIndex(index => index.sku === pizza.sku);
    if (idx > -1) {
      this.eats[idx].counter++;
    } else {
      this.eats.push(pizza)
    }
    this.count++;
    this.productCounter.next(this.count);
  }

  inc(index: number) {
    this.eats[index].counter++;
    this.count++;
    this.productCounter.next(this.count);
  }
  decr(index: number) {
    if(this.eats[index].counter > 1) {
      this.eats[index].counter--;
      this.count--;
      this.productCounter.next(this.count);
    } else {
      this.removeFromCart(index);
    }
  }


  sumCart() {
    let total = 0;
    this.eats.forEach((item: {price: number, counter: number}) =>
    total += item.price * item.counter);
    this.sum = total;
    return this.sum;
  }

  getItems() {
    return this.eats;
  }

  clearCart() {
    this.count = 0;
    this.eats = [];
    this.productCounter.next(this.count);
    return this.eats;
  }

  removeFromCart(index: number): void {
    this.eats.splice(index, 1);
    this.count--;
    this.productCounter.next(this.count);
  }
}
