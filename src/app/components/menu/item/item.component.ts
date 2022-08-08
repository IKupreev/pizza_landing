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

  localPizza!: Pizza;


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

  }

  addToCart(name?: string, price?: number) {
    this.cartService.addToCart(name, price);
    this.addToCartClick = true;
    this.cartBtn = true;
    this.counter++;
    this.cartService.productCounter.next(this.counter);
  }

  onSelect(group: PizzaGroup, event: any):void {
    for (let sk of group.pizzas)
    {
      if(event.target.value == sk.sku)
      {
        this.localPizza = sk;
        group.curPizza = this.localPizza;
      }
    }
  }

}
