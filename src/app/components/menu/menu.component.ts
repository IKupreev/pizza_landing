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


  constructor(private menuService: MenuService) { }


  ngOnInit() {

  this.menuList = this.menuService.getMenuList();

  }

}
