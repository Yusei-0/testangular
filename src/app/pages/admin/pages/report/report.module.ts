import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileInputComponent } from './components/file-input/file-input.component';

@NgModule({
  declarations: [ReportComponent, FileInputComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class ReportModule {}
