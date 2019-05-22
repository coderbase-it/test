import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakePrestation: Prestation[] = [
  new Prestation({
    id: 'lkjsdf',
    client: 'Atos',
    typePresta: 'Dev',
    nbJours: 50,
    tjmHt: 1200,
    comment: 'Merci Atos pour les 1.2k/j'
  }),
  new Prestation({
    id: 'sdfs',
    client: 'Modis',
    typePresta: 'Coaching',
    nbJours: 20,
    tjmHt: 1800,
    comment: 'Merci Modis pour les 1.8k/j'
  }),
];
