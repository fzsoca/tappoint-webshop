import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  myForm: FormGroup;

  constructor(private apiService: ApiService,
              private cartService: CartService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    });
  }

  sendOrder() {
    let order: any = {}
    order.address = this.myForm.controls['address'].value;
    order.phone = this.myForm.controls['phone'].value;
    order.name = this.myForm.controls['name'].value;

    order.menuItemIds = this.cartService.getItemsWithCount().map(x => { return { "id": x.id, "count": x.count}});
    this.apiService.postOrder(order).subscribe(data =>this.cartService.clearCart(), err => alert(err.error.error))

  }

}
