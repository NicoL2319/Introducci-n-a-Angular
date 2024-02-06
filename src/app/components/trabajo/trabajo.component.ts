import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-trabajo',
  standalone: true,
  imports: [CommonModule,AppComponent],
  templateUrl: './trabajo.component.html',
  styleUrl: './trabajo.component.css'
})
export class TrabajoComponent {


  title = 'Contador App';
  numero : number =  0;
  base : number = 5

// ****OPCION 2****
  acumular (valor : number) {
    this.numero += valor;
  }
  //------------------------------------------------
  //*****OPCION 1*******

  //sumar(){
  //  this.numero += 1;
  // }
  // restar(){
  //  this.numero -=1;
  //}
  //--------------------------------------------------

  // *******************TAREA******************************
  //constructor(){

   // var nombre1;
   // nombre1  = prompt("Digite su nombre");
  }





