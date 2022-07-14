import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList!: Observable<Menu[]>
  //menuList: Menu[] = [];
  //menu: Menu | undefined;
  //@Input() menu!: Menu;
  //menuList$!: Observable<Menu[]>

  constructor(private menuService: MenuService) { }

  // loadMenu() {
  //   this.menuService.getMenuList()
  //     .subscribe((data: Menu) => this.menu = {
  //         id: data.id,
  //         Title: data.Title,
  //         Description: data.Description,
  //         Price: data.Price,
  //   });
    // this.menuService.getMenuList()
    //   .subscribe(resp => {
    //     const keys = resp.headers.keys();
    //     const header = keys.map(key =>
    //       `${key}: ${resp.headers.get(key)}`);

    //       this.menu = {
    //         ...resp.body!
    //       };
    //   })
  //}

  ngOnInit() {
    this.menuList = this.menuService.getMenuList();
    //console.log("Load Menu: " + this.menuList$);
    //console.log("Title: " + this.menu?.Title);
  }

}
