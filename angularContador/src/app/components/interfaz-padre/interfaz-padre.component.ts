import { Component } from '@angular/core';
import { InterfazComponent} from "../interfaz/interfaz.component"
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-interfaz-padre',
  standalone: true,
  imports: [InterfazComponent],
  templateUrl: './interfaz-padre.component.html',
  styleUrl: './interfaz-padre.component.css'
})
export class InterfazPadreComponent {
  num : number = 0;
    multiplicarNumero(value:number){
      this.num = value*2;
     
    }
}
