import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

    nombre: string = "Nicol";
    edad : number = 20;

  // nombre = prompt("Digite su nombre:");  --> crear una ventana
  //edad = prompt("Digite su edad:");

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombrecapitalizado (){
    return this.nombre?.toUpperCase();
  }

  CambiarNombre(){
    this.nombre = "Dayanna";
  }

  CambiarEdad(){
    this.edad = 21;
  }
}
