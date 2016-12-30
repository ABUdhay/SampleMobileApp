import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the SearchPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'search-pipe'
})
@Injectable()
export class SearchPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, [query]) {
    value = value + ''; // make sure it's a string
    value.filter(function(itm){
        return (itm.title.toLowerCase().indexOf(query.toLowerCase())>-1);
    });
    //return value.toLowerCase();
  }
}
