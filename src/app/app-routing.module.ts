import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@/guards';
import { PrivatesRoutes, PublicRoutes } from '@/models';

const routes: Routes = [
  {
    path: '',
    redirectTo: PublicRoutes.HOME,
    pathMatch: 'full',
  },
  {
    path: PublicRoutes.HOME,
    loadChildren: () => import('./pages/home/').then((m) => m.HomeModule),
  },
  {
    path: PrivatesRoutes.ADMIN,
    loadChildren: () => import('./pages/admin/').then((m) => m.AdminModule),
    canActivate: [authGuard],
  },
  {
    path: PublicRoutes.LOGIN,
    loadChildren: () => import('./pages/login/').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
