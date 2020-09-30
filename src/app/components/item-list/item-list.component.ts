import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Item } from '../../model/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items:Item[];
  constructor(private apiServ:ApiService) { }

  ngOnInit() {
    this.items=this.apiServ.getItems();
  }




}
