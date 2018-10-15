import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { StarRaterComponent } from './star-rater/star-rater.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MoviesService } from './services/movies.service';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieSortPipePipe } from './movie-sort-pipe.pipe';

const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    StarRaterComponent,
    PageNotFoundComponent,
    MovieFilterPipe,
    MovieSortPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ChartModule
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
