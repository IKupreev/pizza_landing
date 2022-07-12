import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Menu } from '../shared/interfaces';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuList(){
    const url = `https://docs.google.com/spreadsheets/d/${environment.apiKey}/gviz/tq?tqx=out:json`
    return this.http.get(url)

  };
}
