import { apiResponse } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Menu } from '../shared/interfaces';
import { map, Observable, pipe } from 'rxjs';
import { pluck } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = 'assets/MenuPizzas.json';
  //url = 'http://localhost:3000/api/menu';
  constructor(private http: HttpClient) { }

  getMenuList(): Observable<Menu[]> {
    return this.http.get<apiResponse>(this.url).pipe(pluck('pizza', 'menu'));
  }

  getCurrentPrice() {

  }
}
