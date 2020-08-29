import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Nos permite hacer conexiones con aplicaciones externas utilizando el protocolo http
import { Propietario } from '../models/propietario'; //Cargamos el modelo
/* import { UserService } from './user.service'; */
import { GLOBAL } from './global'

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  public apiURL: string


  constructor(
    private http: HttpClient,
    /* private user: UserService */

  ) {this.apiURL= GLOBAL.url }

    
  prepareHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        /* 'Authorization': this.user.getToken() */
      })
    }
  }

  createCap(formData, serieId) {
    return this.http.post<Propietario>(`${this.apiURL}/create-propietario`, formData);
  }

 /*  getCaps(filter, page) {
    console.log('Esta es la ruta de page --> ', `${page}`)
    return this.http.get(`${this.apiURL}/getAll/${page}${filter}`, this.prepareHeaders())

  }

  getTotalCaps() {
    return this.http.get(`${this.apiURL}/getTotalSongs`, this.prepareHeaders())
  } */



   

}
