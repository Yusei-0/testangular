import { ClientModel } from '@/models';
import { Component, OnInit, inject } from '@angular/core';
import { parseCSVString } from '@/utils';
import { ClientDataService } from '../../state/client-data.service';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  clients: ClientModel[] = [];
  clientsDataService = inject(ClientDataService);

  ngOnInit(): void {
    if (this.clientsDataService.getClients()) {
      this.clients = this.clientsDataService.getClients();
    }
  }

  onSubmit() {}

  onFileChange(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;
        this.clients = parseCSVString(csvData);
        this.clientsDataService.setClient(this.clients);
        console.log('Clientes: ');
        console.table(this.clients);
      };
      reader.readAsText(file);
    }
  }
}
