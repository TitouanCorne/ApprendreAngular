import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Recepe } from '../recepe';
import { RecepeService } from '../recepe.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  recepeService : RecepeService = inject(RecepeService)
  recepeList:Recepe[] = [];
  recepeListFiltered:Recepe[] = [];

  // EventEmitter pour émettre les données filtrées
  @Output() recepeListTransmitted: EventEmitter<Recepe[]> = new EventEmitter<Recepe[]>();

  constructor() {
      this.recepeService.getAllRecepes().then((recepeList : Recepe[])=>{
        this.recepeList = recepeList;
      });
      this.recepeListFiltered = [];
  }

  filterResults(filterSelected:string, typeSelected: string, ownerSelected:string){
    console.log("Filtre détecté : ", filterSelected, "Type : ", typeSelected, "Cuisiné par : ", ownerSelected)
    this.recepeListFiltered = this.recepeList.filter((recepe) => 
      recepe?.name.toLowerCase().includes(filterSelected.toLowerCase())
    );
    if(typeSelected != "Tout type de plat"){
      this.recepeListFiltered = this.recepeListFiltered.filter((recepe) =>
        recepe?.type.toLowerCase().includes(typeSelected.toLowerCase())
      );
    }
    if(ownerSelected != "Tout le monde"){
      this.recepeListFiltered = this.recepeListFiltered.filter((recepe) => 
        recepe?.owner.toLowerCase().includes(ownerSelected.toLowerCase())
      );
    }
    this.recepeListTransmitted.emit(this.recepeListFiltered); // Émettre les résultats filtrés
    return
  }
}
