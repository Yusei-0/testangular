import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { httpErrorFunction } from '@/utils/http-error-function';
import { AuthModel } from '@/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  http = inject(HttpClient);

  login(username: string, password: string): Observable<any> {
    const credentials = {
      username: username,
      password: password,
    };
    return this.http
      .post<AuthModel>(`${this.apiUrl}/login`, credentials)
      .pipe(retry(3), catchError(httpErrorFunction));
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  saveTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
}