import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';
import { Menu, Variants } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  @Input() pizza?: Menu;


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

    this.curPrice = this.pizza?.variants[0].price
  }

  addToCart(menu: Menu) {
    this.cartService.addToCart(menu);
    this.addToCartClick = true;
    this.cartBtn = true;
    this.counter++;
    this.cartService.productCounter.next(this.counter);
  }

  onSelect(event: any):void {

    this.curPrice = event.target.value;
  }

}
