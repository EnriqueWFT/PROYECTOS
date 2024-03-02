import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimerDiaComponent,GoogleMapsModule,SegundoDiaComponent,TercerDiaComponent,ProyectoComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
ejemplo = 'amigo'

  }

