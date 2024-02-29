import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.css'
})
export class SegundoDiaComponent {
  formulariouser: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })
  
  variable = '';


  user = [
    {
      name: 'luis',
      descripcion: 'hola'
    },
    {
      name: 'luis1',
      descripcion: 'hola'
    },
    {
      name: 'luis2',
      descripcion: 'hola'
    }
  ]
  name = ''
  description = ''

  constructor() {
    console.log("se ejecuto el contructor")
  }
  ngOnInit(): void {
    console.log("se ejecuto tu check");

  }
  ngOnDestroy(): void {
    console.log("se ejecuto el ondestroy");
  }
  clickButton(text: string) {
    this.variable = text

  }
  submitForm(){
    this.formulariouser.value
    console.log(this.formulariouser.value)
  }
}
