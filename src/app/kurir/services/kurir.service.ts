import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kurir } from 'src/app/kurir/kurir';

@Injectable({
  providedIn: 'root'
})
export class KurirService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7243/api/Kurirs';

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    })
  };

  public addKurir(Kurir: any): Observable<any> {
    return this.http.post<Kurir>(this.configUrl, JSON.stringify(Kurir.value), this.httpOptions);
  }
  public editKurir(Kurir: any, id: number): Observable<Kurir> {
    return this.http.put<Kurir>(this.configUrl + "/" + id, JSON.stringify(Kurir.value), this.httpOptions);
  }

  public getKurir(): Observable<any> {
    return this.http.get<Kurir>(this.configUrl, this.httpOptions);
  }

  public deleteKurir(id: number): Observable<any> {
    return this.http.delete<Kurir>(this.configUrl + "/" + id, this.httpOptions);
  }

  public getKurirById(id: number): Observable<Kurir> {
    return this.http.get<Kurir>(this.configUrl + "/" + id, this.httpOptions);
  }
}
