import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MoviesService } from '../services/movies.service';
import { StarRaterComponent } from '../star-rater/star-rater.component';

import { Movie } from './movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  constructor(private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.moviesService.findMovie(id);
  }

  goBack(): void {
    this.location.back();
  }

  onRateChange(score): void {
    console.log("Updating")
    this.moviesService.updateMovie(this.movie.$id, score);
  }

}
