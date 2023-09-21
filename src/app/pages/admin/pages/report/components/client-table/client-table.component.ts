import { ClientModel } from '@/models';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css'],
})
export class ClientTableComponent implements OnChanges {
  @Input()
  clientData: ClientModel[] = [];

  displayedColumns: string[] = [
    'fecha',
    'cliente',
    'cuenta',
    'monto',
    'moneda',
    'estatus',
    'asociado',
    'folio',
  ];
  dataSource: MatTableDataSource<ClientModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.clientData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshDataSource();
  }

  refreshDataSource() {
    this.dataSource = new MatTableDataSource(this.clientData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
