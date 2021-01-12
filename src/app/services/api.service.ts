import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import * as images from  "../../assets/images.json";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://swapi.tech/api/';

  constructor(private http: HttpClient) { }

  getFilms$(): Observable<any>{
    return this.http.get(this.API_URL+'films/').pipe(
      map(
        (films:any) => {
          console.log(films);
          films.results.map (
            e => {
            /*   e.id = this.getIdFromUrl(e.url); */
              e.img = images.data.find(
                f => f.id==e.uid).poster_path
              return e;
            }
          )
          return films;
        }
      ),take(1), delay(3000)
    );
  }

  getFilm$(id): Observable<any>{
    return this.http.get(this.API_URL+'films/'+id).pipe(delay(1000));
  }

}
