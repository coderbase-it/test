import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  // private behavior for storing clients list
  private privateClients$: BehaviorSubject<Client[]> = new BehaviorSubject([]);

  // public observable based on private BehaviorSubject ( getter/setter for rxjs )
  public readonly clients$ = this.privateClients$.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * retrieve client list and update clients store ( behaviorSubject)
   */
  getClients() {
   return this.http.get<Client[]>(`${environment.urlApi}/clients`).pipe(
    map(clients => clients.map(data => new Client(data)))
  ).subscribe((clients) => {
    this.privateClients$.next(clients);
  });
  }

  /**
   * update client state and update clients store accordingly ( behaviorSubject)
   */
  update(item: Client) {
    return this.http.put<Client>(`${environment.urlApi}/clients/${item.id}`, item)
    .pipe(tap((data: Client) => {
      const clientsList = this.privateClients$.value;
      clientsList.forEach((client) => {
        if ( client.id === data.id) {
          client = new Client(data);
        }
      });
      this.privateClients$.next(clientsList);
    }));
  }

  /**
   * delete client and update store accordingly
   * @param item client
   */
  delete(item: Client) {
    return this.http.delete(`${environment.urlApi}/clients/${item.id}`)
    .subscribe( () => {
      let clientsList = this.privateClients$.value;
      clientsList = clientsList.filter((client) => client.id !== item.id);
      this.privateClients$.next(clientsList);
    });
  }

}
