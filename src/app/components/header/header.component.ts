import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  condition: boolean = false;
  visibleCounter: boolean = false;
  cartCount: number = 0;


  constructor(
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.cartService.productCounter.subscribe((counter) => {
      if(counter > 0)
      {
        this.visibleCounter = true;
      }
      else this.visibleCounter = false;

      this.cartCount = counter;
    })
  }

  toggle() {
    this.condition=!this.condition;
  }


  open(){
    if(this.visibleCounter)
    this.router.navigate(['/cart'])
  }

}
