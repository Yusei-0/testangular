import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { httpErrorFunction } from '@/utils/http-error-function';
import { AuthModel } from '@/models';
import { ClientDataService } from '@/state/client-data.service';
import { UserStateService } from '@/state/user-state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  http = inject(HttpClient);
  clientsData = inject(ClientDataService);
  userState = inject(UserStateService);

  login(username: string, password: string): Observable<any> {
    const credentials = {
      username: username,
      password: password,
    };

    if (credentials.username)
      this.userState.user.username = credentials.username;
    return this.http
      .post<AuthModel>(`${this.apiUrl}/login`, credentials)
      .pipe(retry(3), catchError(httpErrorFunction));
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.clientsData.refreshClients();
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

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return of(null);
    }

    return this.http
      .post<any>(`${this.apiUrl}/api/login/refresh`, { refreshToken })
      .pipe(
        map((response) => {
          const accessToken = response.accessToken;
          const newRefreshToken = response.refreshToken;
          return { accessToken, refreshToken: newRefreshToken };
        }),
        catchError((error) => {
          // Manejar errores de renovación de tokens
          return of(null);
        })
      );
  }
}
