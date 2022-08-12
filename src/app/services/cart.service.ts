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

    this.eats.push(pizza);
    this.count++;
    this.productCounter.next(this.count);
  }

  sumCart() {
     this.sum = this.eats.map(o => o.price).reduce((a,b) => a + b);
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
    //this.sumCart();
  }
}
