import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  condition: boolean = false;
  headerCount: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.headerCount = this.cartService.counter;
  }

  toggle() {
    this.condition=!this.condition;
  }
}
