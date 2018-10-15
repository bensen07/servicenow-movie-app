import { Injectable } from '@angular/core';
import { Movie } from '../movie-details/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [{
    "$id": "1",
    "title": "Gone Girl",
    "image": "assets/images/movie1.jpg",
    "rating": "3",
    "releaseDate": "2014-02-22",
    "description": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
  },
  {
    "$id": "2",
    "title": "The Good Lie",
    "image": "assets/images/movie2.jpg",
    "rating": "4",
    "releaseDate": "2014-06-24",
    "description": "A group of Sudanese refugees, given the chance to resettle in the U.S., arrive in Kansas City, Missouri, where their encounter with an employment agency counselor forever changes all of their lives."
  },
  {
    "$id": "3",
    "title": "The Hero of Color City",
    "image": "assets/images/movie3.jpg",
    "rating": "0",
    "releaseDate": "2014-11-23",
    "description": "A diverse band of crayons strive to protect not only their magical multihued homeland but the imagination of children everywhere from a terrifying monster."
  },
  {
    "$id": "4",
    "title": "Guardians of the Galaxy",
    "image": "assets/images/movie4.jpg",
    "rating": "5",
    "releaseDate": "2014-07-01",
    "description": "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe."
  },
  {
    "$id": "5",
    "title": "The Drop",
    "image": "assets/images/movie5.jpg",
    "rating": "0",
    "releaseDate": "2014-12-01",
    "description": "Bob Saginowski finds himself at the center of a robbery gone awry and entwined in an investigation that digs deep into the neighborhood's past where friends, families, and foes all work together to make a living - no matter the cost."
  },
  {
    "$id": "6",
    "title": "If I Stay",
    "image": "assets/images/movie6.jpg",
    "rating": "0",
    "releaseDate": "",
    "description": "Life changes in an instant for young Mia Hall after a car accident puts her in a coma. During an out-of-body experience, she must decide whether to wake up and live a life far different than she had imagined. The choice is hers if she can go on."
  }
  ];
  constructor() {

  }

  getMovies() {
    return this.movies;
  }

  findMovie(id: string): Movie {
    for (let movie of this.movies) {
      if (movie.$id == id) {
        console.log("Movie " + movie);
        return movie;
      }
    }
  }

  updateMovie(id: string, rating: string) {
    let movie: Movie;
    for (let m of this.movies) {
      if (m.$id == id) {
        console.log("Movie " + m);
        movie = m;
        break;
      }
    }

    movie.rating = rating;

    let t: Movie = this.findMovie(id)
    console.log("Updated Rating for " + t.title + " is " + t.rating);
    console.log("Movies "+JSON.stringify(this.movies));
  }

}
