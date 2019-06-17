import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any;
  categories: string[];


  constructor(private apiService: ApiService,
              private cartService: CartService) { }

  ngOnInit() {
    this.apiService.getCategories().subscribe(data => this.categories = <string[]>data);
  }

  chooseCategory(category: string) {
    this.apiService.getMenuItems(category).subscribe(result => {
      this.items = result;
    })
  }

  addToCart(item: any) {
    this.cartService.addItem(item);
  }

}
