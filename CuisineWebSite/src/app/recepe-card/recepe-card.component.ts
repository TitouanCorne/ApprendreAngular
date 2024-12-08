import { Component, Input } from '@angular/core';
import { RecepeCard } from '../recepe-card';

@Component({
  selector: 'app-recepe-card',
  standalone: true,
  imports: [],
  templateUrl: './recepe-card.component.html',
  styleUrl: './recepe-card.component.css'
})
export class RecepeCardComponent {
  @Input() recepecard!:RecepeCard;

  goToDetails(id : number) {
    console.log("tu as cliqué sur la recette n° ", id)
  }
}
