import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie-details/movie';


@Pipe({
  name: 'sort'
})
export class MovieSortPipePipe implements PipeTransform {

  transform(array: Movie[], orderField: string, orderType: boolean): Movie[] {
    array.sort((a: any, b: any) => {
      let ae = a[orderField];
      let be = b[orderField];
      if (ae == undefined && be == undefined) return 0;
      if (ae == undefined && be != undefined) return orderType ? 1 : -1;
      if (ae != undefined && be == undefined) return orderType ? -1 : 1;
      if (ae == be) return 0;
      return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    });
    return array;
  }

}
