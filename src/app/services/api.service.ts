import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Item } from '../model/Item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string = 'http://localhost:8080/';
  apiItems = 'items';

  items:Item[]=[
    {
    item_id:1,
    name:"Apa",
    description:"asDEEEEEEEDASdsaddas",
    url:"https://cdn.discordapp.com/attachments/489042437021368320/760477364844625950/unknown.png",
    quantity:5,
    quantitytype:"litri",
    category:"Lichide",
    price:21.1,
    nrofitems:10
  },
  {
    item_id:2,
    name:"Vin",
    description:"asdas",
    url:"https://cdn.discordapp.com/attachments/489042437021368320/760477431034675210/unknown.png",
    quantity:2,
    quantitytype:"Desc",
    category:"Lichide",
    price:35.5,
    nrofitems:10
  },
  {
    item_id:1,
    name:"Lapte",
    description:"Descriere",
    url:"https://cdn.discordapp.com/attachments/489042437021368320/760477496923127838/unknown.png",
    quantity:1,
    quantitytype:"litri",
    category:"Lichide",
    price:42.1,
    nrofitems:10
  },
];


  constructor(private http:HttpClient) { }

  getItems():Item[]{
    return this.items;
    /*
     return this.http.get<Item[]>(`${this.apiUrl}${this.apiItems}`);
    */
  }
}
