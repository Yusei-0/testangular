export interface ClientModel {
  fecha: Date;
  cliente: string;
  cuenta: string;
  monto: number;
  moneda: string;
  estatus: string;
  clienteAsociado: string;
  folio: string;
}

export const mockClients: ClientModel[] = [
  {
    fecha: new Date(),
    cliente: 'Cliente 1',
    cuenta: '123456789',
    monto: 1000,
    moneda: 'USD',
    estatus: 'Activo',
    clienteAsociado: 'Cliente Asociado 1',
    folio: 'ABC123',
  },
  {
    fecha: new Date(),
    cliente: 'Cliente 2',
    cuenta: '987654321',
    monto: 2000,
    moneda: 'EUR',
    estatus: 'Inactivo',
    clienteAsociado: 'Cliente Asociado 2',
    folio: 'DEF456',
  },
  {
    fecha: new Date(),
    cliente: 'Cliente 3',
    cuenta: '567890123',
    monto: 1500,
    moneda: 'GBP',
    estatus: 'Activo',
    clienteAsociado: 'Cliente Asociado 3',
    folio: 'GHI789',
  },
  {
    fecha: new Date(),
    cliente: 'Cliente 4',
    cuenta: '321098765',
    monto: 3000,
    moneda: 'CAD',
    estatus: 'Activo',
    clienteAsociado: 'Cliente Asociado 4',
    folio: 'JKL012',
  },
  {
    fecha: new Date(),
    cliente: 'Cliente 5',
    cuenta: '654321098',
    monto: 2500,
    moneda: 'AUD',
    estatus: 'Inactivo',
    clienteAsociado: 'Cliente Asociado 5',
    folio: 'MNO345',
  },
  {
    fecha: new Date(),
    cliente: 'Cliente 6',
    cuenta: '901234567',
    monto: 1800,
    moneda: 'JPY',
    estatus: 'Activo',
    clienteAsociado: 'Cliente Asociado 6',
    folio: 'PQR678',
  },
  {
    fecha: new Date(),
    cliente: 'Cliente 7',
    cuenta: '345678901',
    monto: 2200,
    moneda: 'CHF',
    estatus: 'Inactivo',
    clienteAsociado: 'Cliente Asociado 7',
    folio: 'STU901',
  },
  {
    fecha: new Date(),
    cliente: 'Cliente 8',
    cuenta: '789012345',
    monto: 2800,
    moneda: 'MXN',
    estatus: 'Activo',
    clienteAsociado: 'Cliente Asociado 8',
    folio: 'VWX234',
  },
];

console.log(mockClients);
