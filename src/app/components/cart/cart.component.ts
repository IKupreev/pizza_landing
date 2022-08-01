import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {

  //sum: number | string = this.cartService.sumCart();
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
    //this.sum = "";
    window.alert("Thanks for the order!")

  }

  toHome() {
    this.router.navigate(['/home']);
  }



}
