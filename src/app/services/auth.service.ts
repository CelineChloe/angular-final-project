import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  private _url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {}

  login(credentials: any) {
    return this.http.post(this._url + '/api/authenticate', credentials).pipe(
      map((result: any) => {
        if(result && result.token) {
          localStorage.setItem('token', result.token);
        }
        return result;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
  
    if (!token) return null;
  
    return this.jwtHelper.decodeToken(token);
  }
}
