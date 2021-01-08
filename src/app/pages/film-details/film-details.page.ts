import { FavoriteService } from '../../services/favorite.service';
import { concatMap, first } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  film: any;
  isFavorite = false; 
/*   filmId = null; */
/*   constructor(private activatedRoute: ActivatedRoute, 
              private apiService:ApiService) { } */
  constructor(private favService:FavoriteService){}

  async favoriteFilm(){
    await this.favService.favoriteFilm(this.film.id);
    this.isFavorite = true;
  }
 async ngOnInit() {
/*      this.activatedRoute.params.subscribe(
      (params:Params)=>  this.filmId = params.id    )
 */
 /*  this.film = await this.activatedRoute.params
              .pipe(
                concatMap(
                  (params:Params)=> this.apiService.getFilm$(params.id)
                ),
                first()
              ).toPromise(); */
              console.log(history.state)
      this.film = history.state;
      this.isFavorite = await this.favService.isFavorite(this.film.id);
// this.activatedRoute.snapshot.paramMap.get('id');
  }

}
