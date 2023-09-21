import { ClientModel } from '@/models';

export const parseCSVString = (csvString: string): ClientModel[] => {
  const lines = csvString.split('\n');
  const headers = lines[0].split(',');

  const clients: ClientModel[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');

    const client: ClientModel = {
      fecha: new Date(values[0]),
      cliente: values[1],
      cuenta: values[2],
      monto: Number(values[3]),
      moneda: values[4],
      estatus: values[5],
      clienteAsociado: values[6],
      folio: values[7],
    };

    clients.push(client);
  }
  return clients;
};
