import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Afiliados, Categoria, Zonas } from '../interfaces/afiliados.interface';
import { Afiliado } from '../interfaces/afiliado.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  afiliados: Afiliado[] = [];
  zonas: Zonas[] = [];
  categorias: Categoria[] = [];

  constructor(private http: HttpClient) { 
    this.cargar_afiliados();
    this.cargarZonas();
    this.cargarCategorias();
  }

  cargar_afiliados() {
    this.http.get<Afiliados[]>('https://negocios-85af1.firebaseio.com/afiliados.json')
    .pipe(
      map( resp => {
        return resp.map( resp => Afiliado.afilidosDelJson( resp ) )
      })
    )
    .subscribe( (resp) => {            
      this.afiliados = resp;
      console.log(this.afiliados);
    });
  }

  cargarZonas() {
    this.http.get('https://negocios-85af1.firebaseio.com/zonas.json')
    .subscribe( (resp: Zonas[]) => {
      this.zonas = resp;
      console.log(this.zonas);
    });
  }

  cargarCategorias() {
    this.http.get('https://negocios-85af1.firebaseio.com/categorias.json')
    .subscribe( (resp: Categoria[]) => {
      this.categorias = resp;
      console.log(this.categorias);
    });
  }

}
