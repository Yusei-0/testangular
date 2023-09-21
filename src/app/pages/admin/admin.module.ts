import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AdminComponent } from './admin.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
