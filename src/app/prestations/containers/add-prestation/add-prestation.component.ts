import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationsService: PrestationsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  add(item: Prestation) {
    this.prestationsService.add(item).then((res) => {
      // res serait la reponse de l'api
      // this.router.navigate(['prestations']);
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

  // add(item: Prestation) {
  //   // si appel http vers not api avec httpClient
  //   this.prestationsService.add(item).subscribe((res) => {
  //     // res serait la reponse de l'api
  //     // this.router.navigate(['prestations']);
  //     this.router.navigate(['../'], {relativeTo: this.route});
  //   });
  // }

}
