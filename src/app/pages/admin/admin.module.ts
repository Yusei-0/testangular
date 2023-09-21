import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AdminComponent } from './admin.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [NavbarComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
