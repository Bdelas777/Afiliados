import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrotres'
})
export class FiltrotresPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.sort(( a, b ) => {
      if( a === a ) {
        return -1;
      } else {
        return 1;
      }
    });
  }

}
