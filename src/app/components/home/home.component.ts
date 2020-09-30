import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Item } from '../../model/Item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:Item[];
  constructor(private apiServ:ApiService) { }

  ngOnInit() {
    this.items=this.apiServ.getItems();
  }

}
