import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() colorFavorito: string = "";

  @Output() agregarEstudienteEvento: EventEmitter<string> = new EventEmitter<string>();

  agregarEstudienteHijo(){
    this.agregarEstudienteEvento.emit("pepita");
  }
}
