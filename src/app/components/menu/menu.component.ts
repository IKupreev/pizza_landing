import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { apiResponse, pizza } from './../../shared/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {



 menuList!: Observable<pizza[]>;
 addToCartClick = false;
 cartBtn = false;
 counter: number = 0;
 curPrice: number = 0;
// selectedSize?: Variants;

  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private router: Router
    ) { }


  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.cartBtn = window.pageYOffset !== 0 && this.addToCartClick;
    });
    this.menuList = this.menuService.getMenuList();
    this.cartService.productCounter.subscribe((counter) => {
      this.counter = counter;
      if(this.counter > 0) {
        this.cartBtn = true;
        this.addToCartClick = true;
      }
    });
  }

  // addToCart(menu: Menu) {
  //   this.cartService.addToCart(menu);
  //   this.addToCartClick = true;
  //   this.cartBtn = true;
  //   this.counter++;
  //   this.cartService.productCounter.next(this.counter);
  // }

  // onSelect(event: any):void {

  //   this.selectedSize = event.target.value;
  //   console.log(event.target.value)
  //   console.log(this.selectedSize)
  // }


  open(){
    this.router.navigate(['/cart'])
  }



}
