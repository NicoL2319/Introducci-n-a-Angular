import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { ListadoComponent } from './componentes/listado/listado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    CommonModule,
    RouterOutlet,
    TrabajoComponent,
    HeroesComponent,
    ListadoComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';


}

