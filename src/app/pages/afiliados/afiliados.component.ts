import { Component } from '@angular/core';
import { AfiliadosService } from 'src/app/services/afiliados.service';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent {

  buscarporlugar = '';
  buscarporcategoria = '';
  
  constructor(public afi: AfiliadosService) {

   }

}
