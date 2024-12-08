import { Component, EventEmitter, Output } from '@angular/core';
import { RecepeCardComponent } from '../recepe-card/recepe-card.component';
import { RecepeCard } from '../recepe-card';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  recepeList:RecepeCard[] = [];
  recepeListFiltered:RecepeCard[] = [];

  // EventEmitter pour émettre les données filtrées
  @Output() recepeCardListTransmitted: EventEmitter<RecepeCard[]> = new EventEmitter<RecepeCard[]>();

  constructor() {
      this.recepeList = [
        {
          "id": 1,
          "image": "/assets/img/fondantChocolat.jpg",
          "name": "Fondant au chocolat",
          "owner": "Titouan",
          "type": "Dessert et gateaux"
        },
        {
          "id": 2,
          "image": "",
          "name": "Tarte au citron meringuée",
          "owner": "Perrine",
          "type": "Dessert et gateaux"
        },
        {
          "id": 3,
          "image": "",
          "name": "Macarons à la framboise",
          "owner": "Erell",
          "type": "Dessert et gateaux"
        },
        {
          "id": 4,
          "image": "",
          "name": "Cheesecake mangue-passion",
          "owner": "Loïc",
          "type": "Dessert et gateaux"
        },
        {
          "id": 5,
          "image": "",
          "name": "Gâteau aux carottes",
          "owner": "Sophie",
          "type": "Dessert et gateaux"
        },
        {
          "id": 6,
          "image": "",
          "name": "Brownie aux noix",
          "owner": "Titouan",
          "type": "Dessert et gateaux"
        },
        {
          "id": 7,
          "image": "",
          "name": "Clafoutis aux cerises",
          "owner": "Perrine",
          "type": "Dessert et gateaux"
        },
        {
          "id": 8,
          "image": "",
          "name": "Pancakes moelleux",
          "owner": "Erell",
          "type": "Dessert et gateaux"
        },
        {
          "id": 9,
          "image": "",
          "name": "Tiramisu classique",
          "owner": "Loïc",
          "type": "Dessert et gateaux"
        },
        {
          "id": 10,
          "image": "",
          "name": "Mousse au chocolat",
          "owner": "Sophie",
          "type": "Dessert et gateaux"
        },
        {
          "id": 11,
          "image": "",
          "name": "Cookies aux pépites de chocolat",
          "owner": "Titouan",
          "type": "Dessert et gateaux"
        },
        {
          "id": 12,
          "image": "",
          "name": "Madeleines au citron",
          "owner": "Perrine",
          "type": "Dessert et gateaux"
        },
        {
          "id": 13,
          "image": "",
          "name": "Tarte aux pommes caramélisées",
          "owner": "Erell",
          "type": "Dessert et gateaux"
        },
        {
          "id": 14,
          "image": "",
          "name": "Mille-feuille classique",
          "owner": "Loïc",
          "type": "Dessert et gateaux"
        },
        {
          "id": 15,
          "image": "",
          "name": "Crème brûlée à la vanille",
          "owner": "Sophie",
          "type": "Dessert et gateaux"
        },
        {
          "id": 16,
          "image": "",
          "name": "Pain perdu",
          "owner": "Titouan",
          "type": "Dessert et gateaux"
        },
        {
          "id": 17,
          "image": "",
          "name": "Charlotte aux fraises",
          "owner": "Perrine",
          "type": "Dessert et gateaux"
        },
        {
          "id": 18,
          "image": "",
          "name": "Cannelés bordelais",
          "owner": "Erell",
          "type": "Dessert et gateaux"
        },
        {
          "id": 19,
          "image": "",
          "name": "Galette des rois",
          "owner": "Loïc",
          "type": "Dessert et gateaux"
        },
        {
          "id": 20,
          "image": "",
          "name": "Bûche de Noël au chocolat",
          "owner": "Sophie",
          "type": "Dessert et gateaux"
        }
      ];
      this.recepeListFiltered = [];
  }

  filterResults(filterSelected:string, typeSelected: string, ownerSelected:string){
    console.log("Filtre détecté : ", filterSelected, "Type : ", typeSelected, "Cuisiné par : ", ownerSelected)
    this.recepeListFiltered = this.recepeList.filter((recepe) => 
      recepe?.name.toLowerCase().includes(filterSelected.toLowerCase())
    );
    if(typeSelected != "Tout type de plat"){

    }
    if(ownerSelected != "Tout le monde"){
      this.recepeListFiltered = this.recepeListFiltered.filter((recepe) => 
        recepe?.owner.toLowerCase().includes(ownerSelected.toLowerCase())
      );
    }
    this.recepeCardListTransmitted.emit(this.recepeListFiltered); // Émettre les résultats filtrés
    return
  }
}
