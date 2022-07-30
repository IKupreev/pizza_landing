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
  //counter: number = 0;
  //counter$ = this.productCounter.asObservable();

  addToCart(product: Menu) {
    this.eats.push(product);
    //this.counter++;
  }

  sumCart() {
    this.count = this.eats.map(o => o.price).reduce((a,b) => Number(a) + Number(b));
    return this.count;
  }

  // onChanged(increased: boolean) {
  //   this.productCounter.next(increased);
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
