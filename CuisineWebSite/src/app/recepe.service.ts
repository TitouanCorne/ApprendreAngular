import { Injectable } from '@angular/core';
import { Recepe } from './recepe';

@Injectable({
  providedIn: 'root'
})
export class RecepeService {
  url : string = 'http://localhost:3000/recepes';

  async getAllRecepes():Promise<Recepe[]>{
    const data = await fetch(this.url);
    return (await data.json()) ?? []
  }
  async getRecepeById(id : number){
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? []
  }
}
