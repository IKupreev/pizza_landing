import { apiResponse, Pizza, PizzaGroup } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { group } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = 'assets/MenuPizzasSKU.json';
  //url = 'http://localhost:3000/api/menu';
  constructor(private http: HttpClient) { }

 pizzas: PizzaGroup[] = [];



  getMenuList(): Observable<PizzaGroup[]> {
    return this.http.get<apiResponse>(this.url)
      .pipe(
        pluck('menu', 'pizza'),
        map((PIZZAS) => {
        return  this.pizzas = PIZZAS.reduce((pizzas: PizzaGroup[], pizza) => {
            const pizzaGroupId = pizza.sku.split("-")[0];
            const groupIndex = pizzas.findIndex((group) => group.id === pizzaGroupId);

            if(groupIndex < 0) {
              pizzas.push({
                id: pizzaGroupId,
                pizzas: [pizza],
                title: pizza.name,
                description: pizza.description,
                image: pizza.image,
                curPizza: pizza
              });
            } else {
              pizzas[groupIndex].pizzas.push(pizza);
            }

            return pizzas;
          }, []);
        })
        );
  }

  getCurrentPrice() {

  }
}
