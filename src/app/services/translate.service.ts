import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private API_URL = 'https://ai-translate.p.rapidapi.com/translate';
  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
    'X-RapidAPI-Host': 'ai-translate.p.rapidapi.com'
  });


  traducirTexto(texts: string[], tl: string, sl: string): Observable<any> {
    const body = {
      texts: texts,
      tl: tl,
      sl: sl
    };

    return this.http.post(this.API_URL, body, { headers: this.headers });
  }

}
