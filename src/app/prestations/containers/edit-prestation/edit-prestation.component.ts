import { Component, OnInit, Input } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  maPresta$: Observable<Prestation>;
  @Input() prestaId: string;
  constructor(
    private prestationsService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.maPresta$ = this.prestationsService.getPrestation(this.prestaId);
  }

  update(item: Prestation) {
    item.id = this.prestaId;
    this.prestationsService.update(item).then((res) => {
      // res serait la reponse de l'api
      // this.router.navigate(['prestations']);
      this.router.navigate(['../../'], {relativeTo: this.route});
    });
  }

}
