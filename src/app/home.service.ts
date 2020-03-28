import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'http://localhost:3000';
  
  constructor(private httpClient: HttpClient) { }

  handleError(error) {
    console.log(error.message);
  }


  getCardDetails(): Observable<any> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/documentation`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

}
