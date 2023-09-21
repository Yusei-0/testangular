// import { Injectable, inject } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { catchError, switchMap } from 'rxjs/operators';
// import { throwError, BehaviorSubject } from 'rxjs';
// import { AuthService } from '@/services/auth.service';

// @Injectable()
// export class JWTInterceptor implements HttpInterceptor {
//   authService = inject(AuthService);

//   private refreshTokenInProgress = false;
//   private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
//     null
//   );

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     const token = this.authService.getAccessToken();
//     request = this.addAuthorizationHeader(request, token);

//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error && error.status === 401) {
//           if (this.refreshTokenInProgress) {
//             return this.refreshTokenSubject.pipe(
//               switchMap(() => {
//                 request = this.addAuthorizationHeader(
//                   request,
//                   this.authService.getAccessToken()
//                 );
//                 return next.handle(request);
//               })
//             );
//           } else {
//             this.refreshTokenInProgress = true;
//             this.refreshTokenSubject.next(null);

//             return this.authService.refreshToken().pipe(
//               switchMap((newToken: any) => {
//                 this.refreshTokenInProgress = false;
//                 this.refreshTokenSubject.next(newToken.accessToken);
//                 request = this.addAuthorizationHeader(
//                   request,
//                   newToken.accessToken
//                 );
//                 return next.handle(request);
//               }),
//               catchError((error: any) => {
//                 this.refreshTokenInProgress = false;
//                 this.authService.logout(); // Optional: Clear tokens and navigate to login page
//                 return throwError(error);
//               })
//             );
//           }
//         } else {
//           return throwError(error);
//         }
//       })
//     );
//   }

//   private addAuthorizationHeader(
//     request: HttpRequest<any>,
//     token: string | null
//   ): HttpRequest<any> {
//     if (token) {
//       return request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }
//     return request;
//   }
// }
