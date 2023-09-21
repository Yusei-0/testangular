import { PublicRoutes } from '@/models';
import { AuthService } from '@/services/';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authSevice = inject(AuthService);
  const router = inject(Router);

  return authSevice.isLoggedIn()
    ? true
    : router.navigate(['/' + PublicRoutes.HOME]);
};
