import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private coffeeUrl = 'http://localhost:8080/api/coffee';
 
  constructor(
    private http: HttpClient
  ) { }
 

  getCoffee(id: number): Observable<Coffee> {
    const url = this.coffeeUrl + '/' + id;
    return  this.http.get<Coffee>(url);
  }

  addCoffee (coffee: Coffee, id: number): Observable<Coffee> {
    const url = this.coffeeUrl + '/' + id;
    return this.http.post<Coffee>(url, coffee);
  }

  delete (id: number): Observable<Coffee> {
    const url = this.coffeeUrl + '/' + id;
    console.log(url)
    return this.http.delete<Coffee>(url);
  }

  updateCoffee (coffee: Coffee): Observable<Coffee> {

    return this.http.put<Coffee>(this.coffeeUrl, coffee);
  }
}
