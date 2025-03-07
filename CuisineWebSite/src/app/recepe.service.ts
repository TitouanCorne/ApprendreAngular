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
  };

  async getNewId(): Promise<number> {
    const data = await fetch(this.url);
    const recepes = await data.json();
    const maxId = recepes.reduce((max : number, recepe : Recepe) => recepe.id > max ? recepe.id : max, 0);
    return maxId + 1;
  };

  async addRecepe(recepe: Recepe): Promise<void> {
    console.log("une recette va être ajoutée");
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recepe)
    });
    if (!response.ok) {
      throw new Error('Failed to add recepe');
    }
  }

  async deleteRecepe(recepeID: number): Promise<void> {
    const response = await fetch(`${this.url}/${recepeID}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete recepe');
    }
  }
}
