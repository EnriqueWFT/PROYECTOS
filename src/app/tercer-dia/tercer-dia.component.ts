import { Component } from '@angular/core';
import { EjemploService } from '../Ejemplo.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.css'
})
export class TercerDiaComponent {
constructor(public service:EjemploService){}
name = ""
users:any= []

ngOnInit(){
  this.service.obtenerLista().subscribe(resp => {
    console.log(resp)
    this.users = resp;
  })

}
editartexto(title:string){
console.log(title)
return title;
}
}

