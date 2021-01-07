import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  filmId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe(
      (params:Params)=>  this.filmId = params.id    )

// this.activatedRoute.snapshot.paramMap.get('id');
  }

}
