import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from '../../model/Item';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item$:Observable<Item>;
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

    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiServ.getItem(params.get('item_id')))
    );
  }

  onSubmit() {}

}
