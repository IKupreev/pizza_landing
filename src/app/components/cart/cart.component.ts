import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {

  sum: number | string = this.cartService.sumCart();
  products = this.cartService.getItems();
  isBuyed: boolean = false;
  btnName: string = "BUY";
  cartMessage: string = "Сart is empty"

  constructor(
    private cartService: CartService,
    private router: Router) { }

  choise() {
    this.isBuyed = true;
    if(this.isBuyed) {
      this.cartMessage = "Thanks for the purchase. Come again!"
      this.btnName = "To the home page."
      this.buy();
    } else {
      this.cartMessage = "Сart is empty"
    }
  }

  buy() {
    this.cartService.clearCart();
    this.products=[];
    this.sum = "";
  }

  emptyCart() {
    this.isBuyed = true;
    this.cartMessage = "Сart is empty"
    this.btnName = "To the home page."
    this.buy();
  }

  inc(index: number) {
    this.cartService.inc(index);
    this.sum = this.cartService.sumCart();
  }
  decr(index: number) {
    this.cartService.decr(index);
    this.sum = this.cartService.sumCart();
    if(this.products.length == 0)
    {
      this.emptyCart();
    }
  }

  toHome() {
    this.router.navigate(['/home']);
  }

  removeFromCart(index: number): void {
    let lenght  =  this.products.length;
    lenght--;
    if(lenght > 0) {
    this.cartService.removeFromCart(index);
    this.sum = this.cartService.sumCart();
    } else {
      this.emptyCart();
    }
  }
}
