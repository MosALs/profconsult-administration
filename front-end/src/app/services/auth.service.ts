import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(username: string, password: string): Observable<any>{

    const data = {
      username: username,
      password: password
  };
    return this.http.post('http://localhost:8080/api/v1/auth/signin', data );
  }
}
