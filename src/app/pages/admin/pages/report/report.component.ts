import { ClientModel } from '@/models';
import { Component } from '@angular/core';
import { parseCSVString } from '@/utils';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  clients: ClientModel[] = [];

  onSubmit() {}

  onFileChange(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;
        this.clients = parseCSVString(csvData);
        console.log('Clientes: ');
        console.table(this.clients);
      };
      reader.readAsText(file);
    }
  }
}
