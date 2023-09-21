import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
})
export class FileInputComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  @Input()
  accept: string | string[] = '';

  @Output()
  fileCharge: EventEmitter<File> = new EventEmitter<File>();

  filename = '';

  onFileChange(event: Event) {
    console.log('Archivo');

    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files![0];

    if (file) {
      this.filename = file.name;
      this.fileCharge.emit(file);
    }
  }
}
