import { apiResponse } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Menu } from '../shared/interfaces';
import { map, Observable, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  //url = `https://docs.google.com/spreadsheets/d/${environment.apiKey}/gviz/tq?tqx=out:json`
  url = 'http://localhost:3000/api/menu'
  constructor(private http: HttpClient) { }

  getMenuList(): Observable<apiResponse[]> {
    return this.http.get<apiResponse[]>(this.url)


  }
}
