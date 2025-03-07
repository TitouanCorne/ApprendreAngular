import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Recepe } from '../recepe';
import { ActivatedRoute } from '@angular/router';
import { RecepeService } from '../recepe.service';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute); //permet d'accéder aux données sur l'itinéraire actuel (pour récupérer l'id)
  recepeService : RecepeService = inject(RecepeService)
  userService : UserService = inject(UserService);
  recepe : Recepe | undefined;
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
    const recepeId = Number(this.route.snapshot.params['id']); //convertit id acquis à partir de l'itinéraire d'une chaîne en un nombre.
    this.recepeService.getRecepeById(recepeId).then((recepe : Recepe) => {
      this.recepe = recepe;
    });
    this.currentUser = await this.userService.getCurrentUser();
  }

  // Methode pour supprimer une recette
  async deleteRecepe(): Promise<void> {
    if(this.currentUser.username !== this.recepe?.owner) {
      //message d'erreur si l'utilisateur n'est pas le propriétaire de la recette
      alert("Vous n'êtes pas le propriétaire de cette recette, vous ne pouvez pas la supprimer");
      return;
    } 
    else {
      if(confirm("Voulez-vous vraiment supprimer cette recette ?")) { 
        await this.recepeService.deleteRecepe(this.recepe?.id);
        window.history.back();
        alert("La recette a bien été supprimée");
      }
    }
  }
}
