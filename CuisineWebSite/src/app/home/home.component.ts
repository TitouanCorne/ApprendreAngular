import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userService: UserService = inject(UserService);
  usersList: User[] = [];
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
    this.usersList = await this.userService.getAllUsers();
    this.currentUser = await this.userService.getCurrentUser();
  }
  
  updateUser(id: string): void {
    this.userService.updateCurrentUser(id);
  }

}
