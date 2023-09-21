import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLElement>;

  formBuilder = inject(FormBuilder);

  file = new File([], '');

  form: FormGroup = this.formBuilder.group({
    file: [new FormControl(), Validators.required],
  });

  onSubmit() {}

  onFileChange(file: File) {}

  fileInputClick() {
    this.fileInput.nativeElement.click();
  }
}
