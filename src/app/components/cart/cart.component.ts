import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {

  products = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  buy() {
    this.cartService.clearCart();
    this.products=[];

  }

}
