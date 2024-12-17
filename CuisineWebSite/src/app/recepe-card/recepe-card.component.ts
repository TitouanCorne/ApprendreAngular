import { Component, Input } from '@angular/core';
import { Recepe } from '../recepe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recepe-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recepe-card.component.html',
  styleUrl: './recepe-card.component.css'
})
export class RecepeCardComponent {
  @Input() recepecard!:Recepe;

  goToDetails(id : number) {
    console.log("tu as cliqué sur la recette n° ", id)
  }
}
