import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../model/Item';
import { FormGroup } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[];
  orderForm: FormGroup = new FormGroup({
    adress: new FormControl(''),
    invoiceAdress: new FormControl(''),
    phone: new FormControl('')
  });
  order: Order;

  constructor(private apiServ: ApiService, private cart: CartService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.items = this.cart.getItems();
  }

  onSubmit() {
    this.createOrder();
    this.apiServ.sendOrder(this.order);
    console.log("Order ===" + JSON.stringify(this.order));
    this.clearComponent();

   
  }

  createOrder() {
    this.order = new Order(this.orderForm.value);
    this.order.totalitems = this.items.length;
    var suma: number = 0;
    this.items.forEach(element => {
      suma += element.price;
    });
    this.order.totalprice = suma;
    this.order.delivered = false;
    this.order.items = this.items;
  }

  clearComponent() {
    this.orderForm.reset({
      adress: '',
      invoiceAdress: '',
      phone: '',
    });
    this.items = [];
    this.cart.clear();
    this.order = new Order();
  }


}
