import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Korisnik } from '../korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7243/api/Korisniks/1';

  public getKorisniks() {
    return this.http.get<Korisnik>(this.configUrl);
  }
}
