import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Menu } from '../shared/interfaces';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = `https://docs.google.com/spreadsheets/d/${environment.apiKey}/gviz/tq?tqx=out:json`
  //url = 'assets/MenuPizzas.json'
  constructor(private http: HttpClient) { }

  getMenuList() {
    return this.http.get<Menu[]>(this.url);
    // return this.http.get(this.url, {observe: 'events'})
    // .pipe(
    //   map((data:HttpEvent<object>) => {
    //     if(data.type === HttpEventType.Response) {
    //       console.log('Event type: ', data)
    //     }
    //   })
    // );

  }
}
