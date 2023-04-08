import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroseis'
})
export class FiltroseisPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.filter((value, i, arr) => arr.findIndex( data => data.categorias === value.categorias ) === i );
  }

}
