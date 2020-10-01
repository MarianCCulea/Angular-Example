import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Item } from '../../model/Item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Output() deleteTodo: EventEmitter<Item> = new EventEmitter();


  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }

  setClasses() {
  }

  addProductToCart(item:Item){
    this.cart.addProductToCart(item);
    
    console.log("Added item "+item.name);
  }
  
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
