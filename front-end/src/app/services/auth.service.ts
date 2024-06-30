import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  signin(username: string, password: string): Observable<any> {

    const data = {
      username: username,
      password: password
    };
    return this.http.post('http://localhost:8080/api/v1/auth/signin', data);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  extractUsernameFromToken(token: string | null): any {
    if (token) {
      const payload: JwtPayload = jwtDecode(token);
      return payload.sub;
    }
  }
}
