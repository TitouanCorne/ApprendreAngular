import { Injectable } from '@angular/core';
import { Recepe } from './recepe';

@Injectable({
  providedIn: 'root' // permet à Angular de gérer ce service globalement.
})
export class RecepeService {
  url : string = 'http://localhost:3000/recepes';

  async getAllRecepes():Promise<Recepe[]>{
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  };
  async getRecepeById(id : number){
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? [];
  };

  async changeFavorite(recepeID : number, userID : number){
    const recepe = await this.getRecepeById(recepeID);
    if (recepe) {
      recepe.favorite[userID - 1] = !recepe.favorite[userID - 1];
      await fetch(`${this.url}/${recepeID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recepe)
      });
    }
  }
}
