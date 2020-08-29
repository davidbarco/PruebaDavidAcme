import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //Nos permite hacer conexiones con aplicaciones externas utilizando el protocolo http
import { Conductor } from '../models/conductor'; //Cargamos el modelo
/* import { UserService } from './user.service'; */
import { GLOBAL } from './global'


@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  public apiURL: string
  private headers = new HttpHeaders(
    {
        'Content-Type':  'application/x-www-form-urlencoded',
        Accept: '/',
    }
);
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

  createCap(formData) {
    //const body = new HttpParams({fromObject: formData});
    const options = { headers: this.headers};
    const params = new HttpParams();
    params.set('username', 'username');
    params.set('password', 'password');
    return this.http.post<Conductor>(`${this.apiURL}/create-conductor`, params.toString(),options);

  }

 /*  getCaps(filter, page) {
    console.log('Esta es la ruta de page --> ', `${page}`)
    return this.http.get(`${this.apiURL}/getAll/${page}${filter}`, this.prepareHeaders())

  }

  getTotalCaps() {
    return this.http.get(`${this.apiURL}/getTotalSongs`, this.prepareHeaders())
  } */





}
