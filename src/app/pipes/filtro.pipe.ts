import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: this.newProperty,
})
export class FiltroPipe implements PipeTransform {
  private readonly newProperty = 'filtro';

  transform(value: any, arg: any): any {
    const buscarporlugar = [];
    for (const recorrido of value) {
      if (recorrido.lugar.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        buscarporlugar.push(recorrido);
      }
    }
    return buscarporlugar;
  }
}
