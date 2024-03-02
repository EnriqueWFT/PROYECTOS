import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule, MapMarkerClusterer } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule,MapMarkerClusterer,ReactiveFormsModule,GoogleMap,FormsModule,GoogleMapsModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {
position:any=[]
constructor(){

}
formulariouser: FormGroup = new FormGroup({
  name: new FormControl(''),
  description: new FormControl('')
})
user:any=[]
  submitForm(){
    let obj ={
      ...this.formulariouser.value,
      position: this.position
    }
    console.log(this.user)
    this.user.push(obj)
    console.log(obj)
  }
  markers:any=[]
  lat:any=[]
  lng:any=[]
  addMarker() {
    

    this.markers.push({
      position: {
        lat: this.lat.lat(),
        lng: this.lng.lng() 
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }
  click(event:any){
   this.position={
    lat:event.latLng.lat(),
    lng:event.latLng.lng()
   }
  }
}

