import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepeCardComponent } from '../recepe-card/recepe-card.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { HeaderComponent } from '../header/header.component';
import { Recepe } from '../recepe';
import { RecepeService } from '../recepe.service';

@Component({
  selector: 'app-all-recepes',
  standalone: true,
  imports: [CommonModule, RecepeCardComponent, SearchbarComponent, HeaderComponent],
  templateUrl: './all-recepes.component.html',
  styleUrl: './all-recepes.component.css'
})
export class AllRecepesComponent {
  recepeList : Recepe[]= []
  recepeService : RecepeService = inject(RecepeService)

  constructor() {
    this.recepeService.getAllRecepes().then((recepeList : Recepe[]) => {
      this.recepeList = recepeList;
    })
  }

  updateRecepeList(filteredList: Recepe[]) {
    this.recepeList = filteredList;
  }
}
