import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Recepe } from '../recepe';
import { ActivatedRoute } from '@angular/router';
import { RecepeService } from '../recepe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute); //permet d'accéder aux données sur l'itinéraire actuel (pour récupérer l'id)
  recepeService : RecepeService = inject(RecepeService);
  recepe : Recepe | undefined;
  
  constructor() {
    const recepeId = Number(this.route.snapshot.params['id']); //convertit id acquis à partir de l'itinéraire d'une chaîne en un nombre.
    this.recepeService.getRecepeById(recepeId).then((recepe : Recepe) => {
      this.recepe = recepe;
    });
  }
}
