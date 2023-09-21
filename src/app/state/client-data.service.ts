import { ClientModel } from '@/models';
import { Injectable } from '@angular/core';
import { AdminModule } from '../pages/admin/admin.module';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  private clientsData: ClientModel[] = [];
  constructor() {}

  getClients() {
    return this.clientsData;
  }

  addClient(newClient: ClientModel) {
    this.clientsData = [...this.clientsData, newClient];
  }

  setClient(clients: ClientModel[]) {
    this.clientsData = clients;
  }

  refreshClients() {
    this.clientsData = [];
  }
}
