import { CartService } from './../../services/cart.service';
import { apiResponse } from './../../shared/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 menuList!: Observable<Menu[]>;
 addToCartClick = false;
 cartBtn = false;
 counter: number = 0;

  constructor(
    private menuService: MenuService,
    private cartService: CartService) { }


  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.cartBtn = window.pageYOffset !== 0 && this.addToCartClick;
    })
  this.menuList = this.menuService.getMenuList();

  }

  addToCart(menu: Menu) {
    this.cartService.addToCart(menu);
    this.addToCartClick = true;
    this.cartBtn = true;
    this.counter = this.cartService.counter;
    console.log(this.cartService.eats)
  }

}
