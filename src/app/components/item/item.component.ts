import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Item } from '../../model/Item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Output() deleteTodo: EventEmitter<Item> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
  }
  
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
