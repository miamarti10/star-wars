import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as images from  "../../../assets/images.json";

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films:any[];
  constructor(private router:Router, private navController: NavController) { }

  ngOnInit() {
    this.films = images.data;
  }

  openDetails(film){
    this.router.navigateByUrl(`/tabs/films/${film.id}`);
  }


}
