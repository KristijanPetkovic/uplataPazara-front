import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uplata } from '../uplata';

@Injectable({
  providedIn: 'root'
})
export class UplataService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7243/api/Uplatas';

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    })
  };

  public addUplata(uplata: any): Observable<any> {
    return this.http.post<Uplata>(this.configUrl, JSON.stringify(uplata.value), this.httpOptions);
  }
  public editUplata(uplata: any, id: number): Observable<Uplata> {
    return this.http.put<Uplata>(this.configUrl + "/" + id, JSON.stringify(uplata.value), this.httpOptions);
  }

  public getUplata(): Observable<any> {
    return this.http.get<Uplata>(this.configUrl, this.httpOptions);
  }

  public deleteUplata(id: number): Observable<any> {
    return this.http.delete<Uplata>(this.configUrl + "/" + id, this.httpOptions);
  }

  public getUplataById(id: number): Observable<Uplata> {
    return this.http.get<Uplata>(this.configUrl + "/" + id, this.httpOptions);
  }
}