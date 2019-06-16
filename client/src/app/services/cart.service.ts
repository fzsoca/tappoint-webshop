import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[]

  constructor() {
    if(localStorage.getItem('cart')){
      this.items = JSON.parse(localStorage.getItem('cart'))
    } else {
      this.items = new Array();
    }
  }

  getSum() {
    const sumCalculator = (accumulator, currElement) => accumulator + currElement.price;
    return this.getItems().reduce( sumCalculator, 0);
  }

  addItem(item: any) {
    this.items.push(item);
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  removeItem(id: number) {
    let elementToRemove = this.items.find(elem => elem.id == id);
    this.items.splice(this.items.indexOf(elementToRemove), 1);
  }

  getItems() {
    return JSON.parse(localStorage.getItem('cart'))
  }



}
