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
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  clearCart(){
    this.items = []
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  getItems() : any[] {
    return JSON.parse(localStorage.getItem('cart')) || []
  }

  getItemsWithCount() {
    let raw: any[] = this.getItems()
    let itemsWithCount = []
    itemsWithCount = raw.reduce(function (acc : any[], curr) {
      if (typeof acc[curr.id] == 'undefined') {
        acc[curr.id] = curr;
        acc[curr.id].count = 1;

      } else {
        acc[curr.id].count += 1;
      }

      return acc;
    }, {})
    let itemsArray = Object.keys(itemsWithCount).map(x => itemsWithCount[x])
      return itemsArray;
  }



}
