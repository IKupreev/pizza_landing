import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  condition: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.condition=!this.condition;
  }
}
