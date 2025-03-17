
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isloading: boolean=true;

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;  

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);  
  }

  getRecipeDetails(id: string): Observable<any> {
    const url = `${environment.recipeDetailsUrl}${id}`; 
    return this.http.get(url);
  }

  
}

