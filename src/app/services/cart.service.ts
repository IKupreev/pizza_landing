import { Product } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  eats: Product[] = [];
  productCounter: BehaviorSubject<number> = new BehaviorSubject(0);
  //counter: number = 0;
  //counter$ = this.productCounter.asObservable();

  addToCart(product: Product) {
    this.eats.push(product);
    //this.counter++;
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
