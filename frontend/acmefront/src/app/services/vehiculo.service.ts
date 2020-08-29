import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Nos permite hacer conexiones con aplicaciones externas utilizando el protocolo http
import { Vehiculo } from '../models/vehiculo'; //Cargamos el modelo
/* import { UserService } from './user.service'; */
import { GLOBAL } from './global'

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
   
  public apiURL: string

  constructor(
    private http: HttpClient,

  ) {this.apiURL= GLOBAL.url }


  prepareHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        /* 'Authorization': this.user.getToken() */
      })
    }
  }

  createCap(formData) {
    return this.http.post<Vehiculo>(`${this.apiURL}/create-vehiculo`, formData);
  }

}
