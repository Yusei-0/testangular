import { ClientModel } from '@/models';
import { Injectable } from '@angular/core';

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
