import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Recepe } from '../recepe';
import { RecepeService } from '../recepe.service';
import { HeaderComponent } from '../header/header.component';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-new-recepe',
  standalone: true, // This component is standalone and does not depend on any other component
  imports: [FormsModule, HeaderComponent, NgFor, CommonModule],
  templateUrl: './new-recepe.component.html',
  styleUrls: ['./new-recepe.component.css']
})
export class NewRecepeComponent {
  currentUser: User = {
      id: 10,
      username: "default",
      image: "default",
      current: true
    };
  recepe: Recepe = {
    id: 0,
    image: "/assets/img/default.jpg",
    name: '',
    owner: '',
    type: '',
    cookingTime: '',
    preparationTime: '',
    ingredient: [],
    remark: '',
    steps: [],
    favorite: [false, false, false, false, false]
  };
  constructor(private recepeService: RecepeService, private userService: UserService) {
    this.componentInitialize();
  };

  async componentInitialize() {
    this.currentUser = await this.userService.getCurrentUser();
    this.recepe.owner = this.currentUser.username;
    this.recepe.favorite[this.currentUser.id - 1] = true;
    this.recepe.id = await this.recepeService.getNewId();
  };

  addIngredient() {
    this.recepe.ingredient.push('');
  }

  removeIngredient(index: number) {
    this.recepe.ingredient.splice(index, 1);
  }

  addStep() {
    this.recepe.steps.push('');
  }

  removeStep(index: number) {
    this.recepe.steps.splice(index, 1);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  onSubmit(recepeForm: NgForm) {
    //console.log(this.recepe);
    if (recepeForm.valid) {
      console.log("recepeForm is valid");
      this.recepeService.addRecepe(this.recepe);
      recepeForm.resetForm();
      alert("Votre recette vient d'être ajoutée");
      // if we want to add one more recepe, we need to change the id of the new recepe
      this.recepe.id = this.recepe.id + 1;
    }
  }
}