import { Component, inject, Input } from '@angular/core';
import { Recepe } from '../recepe';
import { RouterModule } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { RecepeService } from '../recepe.service';

@Component({
  selector: 'app-recepe-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recepe-card.component.html',
  styleUrl: './recepe-card.component.css'
})
export class RecepeCardComponent {
  @Input() recepecard!: Recepe;
  userService: UserService = inject(UserService);
  recepeService: RecepeService = inject(RecepeService);
  currentUser: User = {
    id: 10,
    username: "default",
    image: "default",
    current: true
  };
  isFavorite: boolean = false;

  constructor() {
    this.initializeComponent();
  }

  async initializeComponent() {
    this.currentUser = await this.userService.getCurrentUser();
    this.isFavorite = this.recepecard.favorite[this.currentUser.id - 1];
  }

  async changeFavorite(): Promise<void> {
    await this.recepeService.changeFavorite(this.recepecard.id, this.currentUser.id);
    this.isFavorite = !this.isFavorite; // Toggle the favorite status
    this.recepecard.favorite[this.currentUser.id - 1] = this.isFavorite;
  }
}
