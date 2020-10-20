import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from '../../model/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items:Item[];

  item$: Observable<Item>;
  selectedId: number;

  constructor(private apiServ:ApiService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.items=this.apiServ.getItems();

  }

}
