import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent {
  myBoolean: boolean = true;
  myModo: string = 'claro';
  cambiarModo() { 
    if(this.myModo === 'claro') {
      this.myModo = 'oscuro'
    }else{
      this.myModo = 'claro'
    }}
}

