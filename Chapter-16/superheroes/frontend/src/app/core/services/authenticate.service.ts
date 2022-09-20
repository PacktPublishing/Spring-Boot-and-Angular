import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(data: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(`${environment.authURL}/authenticate`, data).pipe(
      tap((data: any) => data),
      catchError(err => throwError(() => err))
   )
  }

  register(data: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(`${environment.authURL}/register`, data).pipe(
      tap((data: any) => data),
      catchError(err => throwError(() => err))
   )
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token') ?? '';
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}
