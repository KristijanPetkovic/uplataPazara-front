import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trgovac } from '../trgovac';

@Injectable({
  providedIn: 'root'
})
export class TrgovacService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7243/api/Trgovacs';

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    })
  };

  public addTrgovac(trgovac: any): Observable<any> {
    return this.http.post<Trgovac>(this.configUrl, JSON.stringify(trgovac.value), this.httpOptions);
  }

  public getTrgovac(): Observable<any> {
    return this.http.get<Trgovac>(this.configUrl, this.httpOptions);
  }
}
