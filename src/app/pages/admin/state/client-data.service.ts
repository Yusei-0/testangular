import { ClientModel } from '@/models';
import { Injectable } from '@angular/core';
import { AdminModule } from '../admin.module';

@Injectable({
  providedIn: AdminModule,
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
}
