import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmResolver } from 'src/app/services/film.resolver';

import { FilmsPage } from './films.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsPage, resolve:{films: FilmResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsPageRoutingModule {}
