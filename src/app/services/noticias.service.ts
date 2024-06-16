import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = 'https://google-news13.p.rapidapi.com/technology?lr=es-AR';

  constructor(private http: HttpClient) { }

  options = new HttpHeaders({
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  )

  getNoticias(): Observable<any> {
    return this.http.get(this.url, {headers:this.options});
  }
}
