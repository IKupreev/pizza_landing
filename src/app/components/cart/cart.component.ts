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

  constructor(
    private cartService: CartService,
    private router: Router) { }

  choise() {
    this.isBuyed = true;
    if(this.isBuyed) {
      this.btnName = "To the home page."
      this.buy();
    }
  }

  buy() {
    this.cartService.clearCart();
    this.products=[];
    this.sum = "";
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
      this.choise();
    }
    console.log("Product: ", this.products)
    console.log("lenght: ", lenght)
  }

}
