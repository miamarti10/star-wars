import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private router:Router, private navController: NavController) { }

  ngOnInit() {
  }

  openDetails(){
    this.router.navigateByUrl(`/tabs/films/42`);
  }

  goToPlanets(){
      this.navController.navigateRoot(`/tabs/planets`);
  }

}
