import { Component, OnInit, OnDestroy, QueryList } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ItemPrestationComponent } from '../../components/item-prestation/item-prestation.component';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // collection: Prestation[];
  collection$: Observable<Prestation[]>;
  headers: Array<string>;
  private sub: Subscription;
  private listItems$: QueryList<ItemPrestationComponent> = new QueryList();
  constructor(
    private prestationsService: PrestationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationsService.collection;
    console.log();


    // this.sub = this.prestationsService.collection.subscribe(
    //   (data) => {
    //     this.collection = data;
    //   }
    // );
    this.headers = [
      'Type',
      'Client',
      'Durée',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
    ];
  }

  change(param: {item: Prestation, state: State}) {

    this.prestationsService.update(param.item, param.state).then((res) => {
      // res etant la reponse de l'api
      // traiter réponse (ex message au user)
    });
  }

  action(param: {item: Prestation, action: string}) {
    if (param.action === 'delete') {
      this.prestationsService.delete(param.item);
    }
    if (param.action === 'edit') {
      this.router.navigate(['prestations/edit', param.item.id]);
    }
  }

  displayDetail(obj) {
    this.prestationsService.presta$.next(obj);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
