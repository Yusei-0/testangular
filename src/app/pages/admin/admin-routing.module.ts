import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full',
      },
      {
        path: 'feed',
        loadChildren: () => import('./pages/feed').then((m) => m.FeedModule),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./pages/report').then((m) => m.ReportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
