import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { timeWork } from './timework';
@Injectable({
  providedIn: 'root'
})
export class TimeworkService {

  timeWorkUrl = 'http://localhost:8080/api/timework';
  
  constructor(
    private http: HttpClient
  ) { }

 

  addTime (timeWork: timeWork, id: number): Observable<timeWork> {
    const url = this.timeWorkUrl + '/' + id;
    console.log(url);
    return this.http.post<timeWork>(url, timeWork);
  }


}
