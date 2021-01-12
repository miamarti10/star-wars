/* import { ApiService } from '../../services/api.service'; */
import { Observable } from 'rxjs';
/* import { NavController } from '@ionic/angular'; */
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
/* import * as images from  "../../../assets/images.json"; */
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films:Observable<any>;
  routeResolveData: any;
  constructor(private router:Router, private route: ActivatedRoute
              /* private apiService:ApiService */) { }

  getIdFromUrl(value){ //https/swavi..../4
    let split = value.split('/');
    return split[split.length-2];
  }

  ngOnInit() {

      if(this.route && this.route.data)
      {
        const promiseObservable = this.route.data;

        promiseObservable.subscribe(promiseValue =>{
          const dataObservable = promiseValue['films']
          
          if(dataObservable){
            dataObservable.subscribe(observableApiValue =>{
              const pageData: any = observableApiValue;
              if(pageData){
               this.routeResolveData = pageData;
              }
            });
          } else{
            console.warn('no hay datos');
          }

        }
          )

      } else {
        console.warn('no vienen datos en la ruta');
      }





    /* this.films = images.data; */
    // this.films = this.apiService.getFilms$();
    // this.films = this.apiService.getFilms$().pipe(
    //   map(
    //     (films:any) => {
    //       console.log(films);
    //       films.results.map (
    //         e => {
    //         /*   e.id = this.getIdFromUrl(e.url); */
    //           e.img = images.data.find(
    //             f => f.id==e.uid).poster_path
    //           return e;
    //         }
    //       )
    //       return films;
    //     }
    //   )
    // )


  }

  openDetails(film){
    /* this.router.navigateByUrl(`/tabs/films/${film.id}`); */
    this.router.navigate(['tabs/films/details'],{state:film});
  }


}
