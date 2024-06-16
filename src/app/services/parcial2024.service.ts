import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallesReceta, RespRecetas } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class Parcial2024Service {

  constructor(private http: HttpClient) { }

  
  
  
  getRecetas(): Observable<RespRecetas> {
    let url = 'https://recipe-book2.p.rapidapi.com/recipes-popular';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com'
    });
    return this.http.get<RespRecetas>(url, { headers:headers });
  }
  getDet(path:string): Observable<DetallesReceta> {
    let url = 'https://recipe-book2.p.rapidapi.com/recipe-details';
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com'
    });
    const params={
      path,
    };

    return this.http.get<DetallesReceta>(url, {headers, params});
  }


}