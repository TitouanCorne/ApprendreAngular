import { Component, inject} from '@angular/core';
import { Recepe } from '../recepe';
import { RecepeService } from '../recepe.service';
import { CommonModule } from '@angular/common';
import { RecepeCardComponent } from '../recepe-card/recepe-card.component';
import { HeaderComponent } from '../header/header.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-my-recepes',
  standalone: true,
  imports: [CommonModule, RecepeCardComponent, HeaderComponent, SearchbarComponent],
  templateUrl: './my-recepes.component.html',
  styleUrl: './my-recepes.component.css'
})
export class MyRecepesComponent {
  recepeList : Recepe[]= []
  myRecepesList : Recepe[] = [];
  recepeService : RecepeService = inject(RecepeService)
  userService : UserService = inject(UserService);
  currentUser: User = {
    id: 10,
    username: "default",
    image: "default",
    current: true
  };

  constructor() {
    this.initializeComponent();
  }

  async initializeComponent() {
    this.currentUser = await this.userService.getCurrentUser();
    this.recepeService.getAllRecepes().then((recepeList : Recepe[]) => {
      this.recepeList = recepeList;
      this.myRecepesList = recepeList.filter((recepe) => 
        recepe?.favorite?.[this.currentUser.id - 1] === true
      );
    });
  }
}
