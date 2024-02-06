import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  nombre : string[] = [
  'Nicol',
  "Dayanna",
  "Carreno",
  "Rodiguez",
  'Dylan'];
HeroeBorrado : string = '';

  borrarNombre(){

    console.log('borrando...');
    this.HeroeBorrado = this.nombre.shift() || '';


  }
}


