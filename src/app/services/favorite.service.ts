import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  async getAllFavoriteFilms(): Promise<{value:any}> {
    const ret = await Storage.get({key: 'favoriteFilms'});

    return JSON.parse(ret.value);
  }

  async favoriteFilm(filmId){
    let result: any = await this.getAllFavoriteFilms();
//TODO: Utilizar set en lugar de array
    if(result) {
      result.push(filmId);

      return Storage.set({key:'favoriteFilms', value: JSON.stringify(result)});

    } else {
      return Storage.set({key:'favoriteFilms', value: JSON.stringify([filmId])});
    }
  }

  async isFavorite(filmId){
    let result: any = await this.getAllFavoriteFilms();
    return result && result?.indexOf(filmId)>=0;
  }
}
