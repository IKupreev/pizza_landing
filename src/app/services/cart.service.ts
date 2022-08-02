import { Menu } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  eats: any[] = [];
  count = 0;
  productCounter: BehaviorSubject<number> = new BehaviorSubject(0);


  addToCart(name?: string, price?: number) {
    this.eats.push(name, price);
    console.log(this.eats)
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
