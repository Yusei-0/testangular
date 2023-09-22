import { ClientModel } from '@/models';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { parseCSVString } from '@/utils';
import { ClientDataService } from '@/state/client-data.service';
import { ReporterService } from '../../services/reporter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit, OnDestroy {
  clients: ClientModel[] = [];
  clientsDataService = inject(ClientDataService);
  reporterService = inject(ReporterService);
  reporterSuscriiption!: Subscription;
  filename = '';

  ngOnInit(): void {
    if (this.clientsDataService.getClients()) {
      this.clients = this.clientsDataService.getClients();
    }
  }

  ngOnDestroy(): void {
    this.unsuscribe();
  }

  unsuscribe() {
    if (this.reporterSuscriiption) this.reporterSuscriiption.unsubscribe();
  }

  onFileChange(file: File) {
    if (file) {
      this.filename = file.name;
      console.log('file name: ' + file.name);
      console.log('file size: ' + file.size);
      console.log('file type: ' + file.type);

      this.reporterSuscriiption = this.reporterService
        .sendCSV(file)
        .subscribe((response) =>
          console.log('Respuesta archivo enviado: ' + response)
        );

      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;
        this.clients = parseCSVString(csvData);
        this.clientsDataService.setClient(this.clients);
      };
      reader.readAsText(file);
    }
  }

  onExport() {
    this.reporterService
      .exportData(JSON.stringify(this.clients).toString(), this.filename, 'csv')
      .subscribe((response) => console.log(JSON.stringify(response)));
  }
}
