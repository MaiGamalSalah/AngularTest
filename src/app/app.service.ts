import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://forkify-api.herokuapp.com/api/search?q=pizza'; 

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getRecipeDetails(id: string): Observable<any> {
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
    return this.http.get(url);

  }
}
