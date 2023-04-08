import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrosiete'
})
export class FiltrosietePipe implements PipeTransform {

  transform(value: any[]): any {
    return value.filter((value, i, arr) => arr.findIndex( data => data.lugar === value.lugar ) === i );
  }

}
