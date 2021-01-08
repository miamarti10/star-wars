import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getFilms$(): Observable<any>{
    return this.http.get(this.API_URL+'films/');
  }

  getFilm$(id): Observable<any>{
    return this.http.get(this.API_URL+'films/'+id)
  }

}
