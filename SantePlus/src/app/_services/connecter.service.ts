import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConnect } from '../interfaces/connect';
import { IToken } from '../interfaces/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnecterService {
  connecter(value: any) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:8011/patient/login'
  constructor(private http: HttpClient) { }

  con(connects: IConnect):Observable<IToken>{
    return this.http.post<IToken>(this.url, connects)
  }
}
