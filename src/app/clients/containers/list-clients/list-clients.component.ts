import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {


  headers: Array<string>;
  clients$: Observable<Client[]>;
  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientsService.getClients();
    this.clients$ = this.clientsService.clients$;
    this.headers = [
      'Name',
      'Email',
      'State',
      'Action'
    ];
  }

  change(param: { item: Client, state: StateClient }) {
    const itemtoPut =  new Client(param.item);
    itemtoPut.state = param.state;
    this.clientsService.update(itemtoPut).subscribe();
  }

  action(param: { item: Client, action: string }) {
    if (param.action === 'delete') {
      this.clientsService.delete(param.item);
    }
    if (param.action === 'edit') {
      this.router.navigate(['clients/edit', param.item.id]);
    }
  }

}
