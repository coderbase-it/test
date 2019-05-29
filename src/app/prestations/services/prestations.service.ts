import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestation } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  pCollection: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);
  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    // this.collection = this.itemsCollection.valueChanges().pipe(
    this.collection = of(fakePrestation).pipe(
      // map(tab => tab.map(obj => new Prestation(obj)))
      map((tab) => {
        this.presta$.next(new Prestation(tab[0]));
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
    // this.collection = this.http.get(`${this.urlApi}collection`).pipe(
    //   map(tab => tab.map(obj => new Prestation(obj)))
    // );
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  // add item in collection
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post(`${this.urlApi}collection`, item);
  }

  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.put(`${this.urlApi}collection`, item);
  }

  delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`${this.urlApi}collection/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`${this.urlApi}collection/${item.id}`);
  }
}
