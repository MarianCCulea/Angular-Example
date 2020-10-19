import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from './components/item-list/item-list.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'itemlist', component: ItemListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'edititem', component: EditItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
