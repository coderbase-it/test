import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { State } from 'src/app/shared/enums/state.enum';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private privateOrderSelected: BehaviorSubject<Order> = new BehaviorSubject(null);
  public readonly orderSelected$ = this.privateOrderSelected.asObservable();

  private privateOrders$: BehaviorSubject<Order[]> = new BehaviorSubject([]);
  public readonly orders$ = this.privateOrders$.asObservable();


  constructor(private http: HttpClient) { }


  getOrders() {
    this.http.get<Order[]>(`${environment.urlApi}/orders`).pipe(
      map(orders => orders.map(data => new Order(data)))
    ).subscribe((orders) => {
      this.privateOrders$.next(orders);
    });
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(`${environment.urlApi}/orders/${id}`).pipe(
      map(order => new Order(order))
    );
  }

  add(item: Order) {
    return this.http.post<Order>(`${environment.urlApi}/orders`, item).pipe(tap((data) => {
      const ordersList = this.privateOrders$.value;
      ordersList.unshift(new Order(data));
      this.privateOrders$.next(ordersList);
    }));
  }

  update(item: Order) {

    return this.http.put<Order>(`${environment.urlApi}/orders/${item.id}`, item).pipe(tap(((data) => {
      const ordersList = this.privateOrders$.value;
      ordersList.forEach((order) => {
        if (order.id === data.id) {
          order = new Order(data);
        }
      });
      this.privateOrders$.next(ordersList);
    })));
  }

  delete(item: Order) {
    return this.http.delete(`${environment.urlApi}/orders/${item.id}`).subscribe(_ => {
      let ordersList = this.privateOrders$.value;
      ordersList = ordersList.filter((order) => order.id !== item.id);
      this.privateOrders$.next(ordersList);
    });
  }

  selectOrder(order: Order) {
    this.privateOrderSelected.next(order);
  }

}
