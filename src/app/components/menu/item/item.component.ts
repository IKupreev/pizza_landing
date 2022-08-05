import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';
import {  Pizza, PizzaGroup, pizzaSizes } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {




  @Input() pizza?: PizzaGroup;


  addToCartClick = false;
  cartBtn = false;
  counter: number = 0;
  curPrice?: number = 0;

  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private router: Router
    ) {}

  ngOnInit(): void {
    console.log(this.pizza?.curPizza);
    console.log(this.pizza)
   // this.curPrice = this.pizza?.variants[0].price
  }

  addToCart(name?: string, price?: number) {
    this.cartService.addToCart(name, price);
    this.addToCartClick = true;
    this.cartBtn = true;
    this.counter++;
    this.cartService.productCounter.next(this.counter);
  }

  onSelect(group: PizzaGroup, event: any):void {

    group.curPizza.price = event.target.value;
    console.log(this.pizza?.curPizza);
    console.log(this.pizza)
    console.log(event.target.value)
  }

  SelectPizza(group: PizzaGroup, pizza: Pizza):void {

    group.curPizza = pizza;
  }

}
