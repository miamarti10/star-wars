import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as images from  "../../../assets/images.json";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films:Observable<any>;
  constructor(private router:Router,
              private apiService:ApiService) { }

  getIdFromUrl(value){ //https/swavi..../4
    let split = value.split('/');
    return split[split.length-2];
  }

  ngOnInit() {
    /* this.films = images.data; */

    this.films = this.apiService.getFilms$().pipe(
      map(
        (films:any) => {
          films.results.map (
            e => {
              e.id = this.getIdFromUrl(e.url);
              e.img = images.data.find(
                f => f.id==e.id).poster_path
              return e;
            }
          )
          return films;
        }
      )
    )


  }

  openDetails(film){
    /* this.router.navigateByUrl(`/tabs/films/${film.id}`); */
    this.router.navigate(['tabs/films/details'],{state:film});
  }


}
