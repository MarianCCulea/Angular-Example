import { Injectable } from '@angular/core';

import { Item } from '../model/Item';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart:Item[]=new Array();;

  constructor() { }

  addProductToCart(item:Item){
      this.itemsInCart.push(item);

  console.log(this.itemsInCart.toString());
}

  getItems ():Item[]{
    return this.itemsInCart;
  }

  clear(){
    this.itemsInCart=[];
  }
}
