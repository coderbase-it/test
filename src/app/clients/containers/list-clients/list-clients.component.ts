import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  collection: Client[];
  headers: Array<string>;
  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
    this.collection = this.clientsService.collection;
    this.headers = [
      'Name',
      'Email',
      'State',
      'Action'
    ];
  }

  change(param: {item: Client, state: StateClient}) {

    this.clientsService.update(param.item, param.state);
  }

}
