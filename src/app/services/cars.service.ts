import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<any> {
    let url = 'https://car-specs.p.rapidapi.com/v2/cars/makes';
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
    })
    return this.http.get(url, { headers: headers });

  }

  getModelosByID(id: number): Observable<any> {
    let url = 'https://car-specs.p.rapidapi.com/v2/cars/makes/';
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
    })
    return this.http.get(url +id+"/models", { headers: headers });
  }
}
