import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  standalone: true,
  imports: [],
  templateUrl: './interfaz.component.html',
  styleUrl: './interfaz.component.css'
})
export class InterfazComponent {
  
  @Output() pasarnumero: EventEmitter<number> = new EventEmitter<number>();
  numero: number=0;
  pasarNumero (){
    this.pasarnumero.emit(this.numero);
  }
}
