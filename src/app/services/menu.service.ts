import { apiResponse, pizza } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {  Observable} from 'rxjs';
import { pluck } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = 'assets/MenuPizzasSKU.json';
  //url = 'http://localhost:3000/api/menu';
  constructor(private http: HttpClient) { }

  getMenuList(): Observable<pizza[]> {
    return this.http.get<apiResponse>(this.url)
      .pipe(
        pluck('menu', 'pizza')
        );
  }

  getCurrentPrice() {

  }
}
