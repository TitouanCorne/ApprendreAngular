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
  // Version finale : @Input() recepecard!: RecepeCard; //non-null assertion operator (!) and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  
  @Input() recepecard!:RecepeCard;

  goToDetails(id : number) {
    console.log("tu as cliqué sur la recette n° ", id)
  }
}
