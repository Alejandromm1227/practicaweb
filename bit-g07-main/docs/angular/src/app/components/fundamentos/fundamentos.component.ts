import { Component } from '@angular/core';
import { PadreComponent } from "../padre/padre.component";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PadreComponent],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  nombreFramework: string = "Angular";
  nombreLenguaje: string = "JavaScript";
  anio: number = 2024;  
  carrito: string[] = ["teclado", "mouse", "pad"];
  estaLogueado: boolean = false;
  frameworks: any[] = [
    {
      id: 10,
      nombre: "angular"
    },
    {
      id: 20,
      nombre: "react"
    },
    {
      id: 30,
      nombre: "vue"
    },
    {
      id: 40,
      nombre: "svelte"
    }
  ];
  colorFondo: string = "cfVerde"

  manejarClick(){
    console.log("hizo click");
    alert("HIZO CLICK!")
  }
  manejarMouseover(){
    console.log("over");
    this.colorFondo = "cfRosado";
  }
  manejarMousedown(){
    console.log("down");
    this.colorFondo = "cfRojo";
  }
  manejarMouseup(){
    console.log("up");
    this.colorFondo = "cfAzul";
  }

  frameworkFavorito: string = "";
  mostrarFrameworkFavorito(){
    console.log("frameworkFavorito: ", this.frameworkFavorito);
  }

  formularioCredenciales = new FormGroup({
    usuario: new FormControl(""),
    contrasenia: new FormControl(""),
  })
  manejarEnvio(){
    console.log("formularioCredenciales: ", this.formularioCredenciales.value);
  }
}
