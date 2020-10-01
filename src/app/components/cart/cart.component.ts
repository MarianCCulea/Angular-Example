import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../model/Item';
import { FormGroup } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items:Item[];
orderForm:FormGroup=new FormGroup({
  adress: new FormControl(''),
  invoiceAdress: new FormControl(''),
  phone: new FormControl('')
});
order:Order;

  constructor(private apiServ:ApiService,private cart:CartService,private fb: FormBuilder) { }

  ngOnInit(): void {
this.items=this.cart.getItems();
  }

  onSubmit() {
this.order =new Order(this.orderForm.value);
this.order.items=this.items;
this.apiServ.sendOrder(this.order);
  }

}
