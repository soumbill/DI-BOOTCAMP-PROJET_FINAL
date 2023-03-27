import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredential } from '../interfaces/credential';
import { IToken } from '../interfaces/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  con(value: any) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:8011/administrateur/login'


  constructor(private http: HttpClient) { }

  login(credentials: ICredential):Observable<IToken>{
    return this.http.post<IToken>(this.url, credentials)
  }
}
