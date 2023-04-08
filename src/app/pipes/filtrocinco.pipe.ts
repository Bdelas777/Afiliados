import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocinco'
})
export class FiltrocincoPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.sort( (a, b) => {
      if(a.lugar < b.lugar ){
        return -1;
      }
      if(a.lugar > b.lugar ) {
        return 1;
      }
      return 0;
    });
  }

}
