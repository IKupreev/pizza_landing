import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //menuList!: Observable<Menu[]>
  menuList: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    //this.menuList = this.menuService.getMenuList();
    this.menuService.getMenuList().subscribe((res: any) => {
      this.menuList = res["cols"];
      console.log(this.menuList);
    })

  }

}
