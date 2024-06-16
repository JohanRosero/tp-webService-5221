import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextToVoiceService {

  private apiUrl = 'https://text-to-speech-google-neural.p.rapidapi.com/text-to-speech/onwK4e9ZLuTAKqWW03F9/stream';
  constructor(private http: HttpClient) { };

  traducirTextoAVoz(texto: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'text-to-speech-google-neural.p.rapidapi.com'
    });

    const requestBody = {
      text: texto,
      model_id: 'eleven_multilingual_v2'
    };

    return this.http.post(this.apiUrl, requestBody, { headers,responseType:'blob'});
  }  

}
