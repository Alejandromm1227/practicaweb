import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  standalone: true,
  imports: [],
  templateUrl: './interfaz.component.html',
  styleUrl: './interfaz.component.css'
})
export class InterfazComponent {
  
  @Output() pasarnumero = new EventEmitter<number>();
  numero: number=0;
  suma () {
    this.numero=this.numero+1;
  }
  resta () {
    this.numero=this.numero-1;
  }
  reset () {
    this.numero = 0;
  }
  pasarNumero (){
    this.pasarnumero.emit(this.numero);
  }
}
