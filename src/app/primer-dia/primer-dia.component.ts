import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.css'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string=''
  
  title = 'Tecnologico de Los Mochis';
  description ="SII";
  card ={
    title: 'Tecnologico de los mochis',
    description:"SII DE LOS MOCHIS SINALOA"
  }
}
