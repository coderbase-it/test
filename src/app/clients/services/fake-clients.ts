import { Client } from 'src/app/shared/models/client.model';

export const fakeClients: Client[] = [
  new Client({
    id: 'lkjsdf',
    name: 'Atos',
    email: 'contact@atos.fr'
  }),
  new Client({
    id: 'dsfg',
    name: 'Capgemini',
    email: 'contact@capgemini.fr'
  }),
];
