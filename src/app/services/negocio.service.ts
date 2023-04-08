import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(public http: HttpClient) { 

  }

  public cargar_negocio( cod: string ) {
    
    return this.http.get(`https://negocios-85af1.firebaseio.com/negocio/${cod}.json`);
    
  }
}
