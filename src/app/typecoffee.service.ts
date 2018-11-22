import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { TypeCoffee } from './typecoffee';

@Injectable({
  providedIn: 'root'
})
export class TypecoffeeService {

  private typeCoffeeUrl = 'http://localhost:8080/api/typecoffee';

  constructor(
    private http: HttpClient
  ) { }

  getTypes(): Observable<TypeCoffee[]>{
    return this.http.get<TypeCoffee[]>(this.typeCoffeeUrl);
  }

  addType (typeCoffee: TypeCoffee): Observable<TypeCoffee> {
    return this.http.post<TypeCoffee>(this.typeCoffeeUrl, typeCoffee);
  }

  delete (id: number): Observable<TypeCoffee> {
    const url = this.typeCoffeeUrl + '/' + id;
    console.log(url)
    return this.http.delete<TypeCoffee>(url);
  }
}
