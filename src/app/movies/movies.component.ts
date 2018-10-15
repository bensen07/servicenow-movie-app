import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Movie } from '../movie-details/movie';
import { StarRaterComponent } from '../star-rater/star-rater.component';
import { MoviesService } from '../services/movies.service';
import { Chart } from 'angular-highcharts';
import { MovieFilterPipe } from '../movie-filter.pipe';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  chart: Chart;
  @Input()
  ratingFilter: number;
  sortField: string;
  @Output() filterEvent = new EventEmitter<Object>();


  constructor(
    private service: MoviesService
  ) {

  }

  ngOnInit() {
    // Retrieve Movies
    this.movies = this.service.getMovies();

    // Construct Chart Data
    let seriesData: number[] = [0, 0, 0, 0, 0];
    for (let m of this.movies) {
      let v: number = 0;
      if (seriesData[+m.rating - 1]) {
        v = seriesData[+m.rating - 1];
      }
      v++;
      seriesData[+m.rating - 1] = v;
    }
    console.log(JSON.stringify(seriesData));

    var aFilter = (rating: number) => {
      this.ratingFilter = rating;
      this.filterEvent.emit(this.ratingFilter);
    };
    // Construct the chart
    this.chart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Movies'
      },
      xAxis: {
        categories: ['1', '2', '3', '4', '5'],
        title: {
          text: "STAR RATINGS"
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Movies (count)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          events: {
            click: function(event) {
              console.log(this.name + " clicked " + event.point.x);
              // this.ratingFilter = event.point.x + 1;
              // this.filterEvent.emit(this.ratingFilter);
              aFilter(event.point.x + 1)
              // this.ratingFilter = event.point.x + 1;
              // this.filterEvent.emit(this.ratingFilter);
              console.log("rating " + this.ratingFilter);
            }
          }
        }
      },
      series: [
        {
          name: 'Movies',
          data: seriesData
        }
      ]
    });

  }

  applySort(sort: string): void {
    this.sortField = sort;
  }

  applyFilter(rating: number): void {
    this.ratingFilter = rating;
    this.filterEvent.emit(this.ratingFilter);
  }



}
