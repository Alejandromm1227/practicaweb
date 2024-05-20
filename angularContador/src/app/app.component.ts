import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InterfazPadreComponent} from "./components/interfaz-padre/interfaz-padre.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterfazPadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
