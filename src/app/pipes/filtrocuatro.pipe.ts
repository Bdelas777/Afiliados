import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocuatro'
})
export class FiltrocuatroPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.sort( (a, b) => {
      if(a.categorias < b.categorias ){
        return -1;
      }
      if(a.categorias > b.categorias ) {
        return 1;
      }
      return 0;
    });
  }

}
