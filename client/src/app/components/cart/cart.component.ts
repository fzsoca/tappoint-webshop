import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PlaceOrderComponent } from '../place-order/place-order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(public cartService: CartService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal() {
    const dialogRef = this.dialog.open(PlaceOrderComponent, {
      width: '300px',
      data: ''
    });
  }

  trackByIndex(i: number, obj: any) {
    return obj.id;
  }


}
