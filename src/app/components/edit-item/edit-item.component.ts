import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from '../../model/Item';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: Item;
  itemForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    url: new FormControl(''),
    quantity: new FormControl(''),
    quantitytype: new FormControl(''),
    nrofitems: new FormControl('')
  });


  constructor(private apiServ:ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id=history.state.data;
    this.item = this.apiServ.getItem(id);
    console.log("asdas aaaaaaa"+id);
this.itemForm.reset({
  name: this.item.name,
  category: this.item.category,
  price: this.item.price,
  description: this.item.description,
  url: this.item.url,
  quantity: this.item.quantity,
  quantitytype: this.item.quantitytype,
  nrofitems: this.item.nrofitems,
});
  }

  onSubmit() {}

}
