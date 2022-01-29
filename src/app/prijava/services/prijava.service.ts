import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Korisnik } from 'src/app/korisnik/korisnik';

@Injectable({
  providedIn: 'root'
})

export class PrijavaService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7243/api/Korisniks';

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    })
  };

  public addKorisnik(korisnik: any): Observable<any> {
    return this.http.post<Korisnik>(this.configUrl, JSON.stringify(korisnik.value), this.httpOptions);
  }

  public getKorisnik(): Observable<any> {
    return this.http.get<Korisnik>(this.configUrl, this.httpOptions);
  }
}