import { Routes } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

export const routes: Routes = [
    {
        path: 'Proyecto',
        component: ProyectoComponent
    },
    {
        path: 'tercer-dia',
        component: TercerDiaComponent
    },
    {
        path: 'primer-dia',
        component: PrimerDiaComponent
    },
    {
        path: 'segundo-dia',
        component: SegundoDiaComponent
    }
   
];
