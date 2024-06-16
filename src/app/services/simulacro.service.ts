import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulacroService {

  constructor(private http: HttpClient) { }


  getInfoIp(ipBuscada: string): Observable<any> {
    let url = 'https://community-neutrino-ip-info.p.rapidapi.com/ip-info';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com',
    });
    const body = {
      'ip': ipBuscada,
      'reverse-lookup': 'checked'
    }
      ;

    return this.http.post(url, body, { headers: headers })

  }

  getIpInfo(ipBuscada: string): Observable<any> {
    let _url = 'https://oliver-ip-geolocation.p.rapidapi.com/default?ip=';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'oliver-ip-geolocation.p.rapidapi.com'
    });

    return this.http.get(_url + ipBuscada, { headers: headers });

  }

  getStreaming(): Observable<any> {
    let url= 'https://streaming-availability.p.rapidapi.com/countries/ar?output_language=es';
    let heders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '5fdd9a2673msh98fdc41b88d08cfp164010jsn7269a45bec65',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    });
    
    return this.http.get(url,{headers:heders})
  }


}
