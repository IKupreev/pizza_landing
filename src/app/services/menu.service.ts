import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuList() {
    return this.http.get(`https://docs.google.com/spreadsheets/d/e/${environment.apiKeyOpen}/pubhtml`)
  }
}
