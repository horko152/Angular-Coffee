import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable, of } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = 'http://localhost:8080/api/category';

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getCategory(id: number): Observable<Category> {
    const url = this.categoryUrl + '/' + id;
    return  this.http.get<Category>(url);
  }
}
