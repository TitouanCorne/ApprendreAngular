import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepeCardComponent } from '../recepe-card/recepe-card.component';
import { RecepeCard } from '../recepe-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RecepeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recepeCardList : RecepeCard[] = [
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan"
    },
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan"
    },
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan"
    },
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan"
    },
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan"
    },
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan"
    },
    {
      id: 1,
      image: "/assets/img/fondantChocolat.jpg",
      name: "Fondant au chocolat",
      owner: "Titouan"
    }
  ]
}
