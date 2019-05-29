import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  pCollection: Client[];
  constructor() {
    this.collection = fakeClients;
  }

  // get collection
  get collection(): Client[] {
    return this.pCollection;
  }

  // set collection
  set collection(col: Client[]) {
    this.pCollection = col;
  }

  // add item in collection

  // update item in collection
  update(item: Client, state?: StateClient) {
    const data = {...item};
    data.state = state;
    // appel http (data)
    item.state = state;
    console.log(item);
  }

  // delete item in collection
  delete(item: Client) {
    console.log(item);

  }

  // get item by id
}
