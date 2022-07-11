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

  getMenuList(): Observable<any> {
    const url = `https://docs.google.com/spreadsheets/d/${environment.apiKey}/gviz/tq?tqx=out:json`
    return this.http.get(url)
      .pipe(
        map((res: any) => {
          const data = res.feed.entry;

          const returnArray: Array<any> = [];
          if (data && data.lenght > 0) {
            data.forEach((entry: any) => {
              const obj: any = {};
              for (const x in entry) {
                if (x.includes('gsx$') && entry[x].$t) {
                  obj[x.split('$')[1]] = entry[x]['$t'];
                }
              }
              returnArray.push(obj);
            });
          }
          return returnArray;
        })
      )
  };
}
