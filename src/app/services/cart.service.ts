import { Menu } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  eats: Menu[] = [];
  count = 0;
  productCounter: BehaviorSubject<number> = new BehaviorSubject(0);


  addToCart(product: Menu) {
    this.eats.push(product);
  }

  // sumCart() {
  //    this.count = this.eats.map(o => o.variants.map(v => v.price)).reduce((a,b) => Number(a) + Number(b));
  //    return this.count;
  // }


  getItems() {
    return this.eats;
  }

  clearCart() {
    this.eats = [];
    this.productCounter.next(0);
    return this.eats;
  }
}
