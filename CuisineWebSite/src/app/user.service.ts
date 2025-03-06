import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root' //permet à Angular de gérer ce service globalement
})
export class UserService {
  url : string = 'http://localhost:3000/users';
  
    async getAllUsers():Promise<User[]>{
      const data = await fetch(this.url);
      return (await data.json()) ?? [];
    };
    async getUserByID(id : number){
      const data = await fetch(`${this.url}/${id}`);
      return (await data.json()) ?? [];
    };
    async getUsername(user : User){
      return user.username;
    };
    async getCurrentUser(): Promise<User> {
      const users = this.getAllUsers();
      return (await users).find(user => user.current) ?? {id: 0, image: "", username: "", current: false};
    };
    async updateCurrentUser(newUserID : string){
      const users = await this.getAllUsers();
      const newUser = await this.getUserByID(Number(newUserID));
      const currentUser = users.find(user => user.current);

      if (currentUser) {
        currentUser.current = false;
        await fetch(`${this.url}/${currentUser.id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      });
      console.log("previous user : ", currentUser);
      }

      if (newUser) {
        newUser.current = true;
        const data = await fetch(`${this.url}/${newUserID}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      console.log("new user : ", newUser);
      return (await data.json()) ?? [];
      }
    }
}
