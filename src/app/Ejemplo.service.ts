
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EjemploService {

   var_service ="Estoy en mi servicio"
   api_url = 'https://jsonplaceholder.typicode.com/'
   constructor(private http:HttpClient){
    
   }
   obtenerLista(){

    return this.http.get(this.api_url+ 'posts')

   }
 onclickButton(text:string){
console.log(text)
this.var_service = text
 }
 
}