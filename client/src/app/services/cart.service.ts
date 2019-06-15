import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[]

  constructor() { }

  addItem(item: any) {
    this.items.push(item);
  }

  removeItem(id: number) {
    let elementToRemove = this.items.find(elem => elem.id == id);
    this.items.splice(this.items.indexOf(elementToRemove), 1);
  }

  getItems() {
    return this.items;
  }



}
