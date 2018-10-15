import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie-details/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: Movie[], param: number): Movie[] {
    console.log("calling pipe with args:" + param)
    let filter: number = param ? +param : null;

    return filter ? value.filter(
      (movie: Movie) => +movie.rating === filter
    ) : value;
  }

}
