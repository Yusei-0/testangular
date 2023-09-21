import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '@/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  router = inject(Router);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Agregar el token JWT a los encabezados de autorización si el usuario está autenticado
    const accessToken = this.authService.getAccessToken();
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          // Manejar el error de autenticación, como el token expirado
          const refreshToken = this.authService.getRefreshToken();
          if (refreshToken) {
            return this.authService.refreshToken().pipe(
              switchMap((tokens: any) => {
                this.authService.saveTokens(
                  tokens.accessToken,
                  tokens.refreshToken
                );
                const newRequest = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${tokens.accessToken}`,
                  },
                });
                return next.handle(newRequest);
              }),
              catchError(() => {
                this.authService.logout();
                this.router.navigate(['/login']);
                return throwError('No se pudo actualizar el token.');
              })
            );
          } else {
            this.authService.logout();
            this.router.navigate(['/login']);
            return throwError('El token expiró y no se puede renovar.');
          }
        } else {
          return throwError(error);
        }
      })
    );
  }
}
