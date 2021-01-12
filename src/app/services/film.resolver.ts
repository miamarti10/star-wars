import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmResolver implements Resolve<any>{

  constructor(private api:ApiService) { }

  resolve(){

    const dataObservable = this.api.getFilms$();

    const observablePromise = Promise.resolve(dataObservable);

    return observablePromise;
  }
}
