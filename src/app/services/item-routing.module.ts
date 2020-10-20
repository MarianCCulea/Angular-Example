import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from '../components/item-list/item-list.component';
import { EditItemComponent } from '../components/edit-item/edit-item.component';

const itemRoutes: Routes = [
  { path: 'item/:id', redirectTo: '/edititem/:id' },
  { path: 'itemlist',  component: ItemListComponent, data: { animation: '' } },
  { path: 'eidtitem/:id', component: EditItemComponent, data: { animation: '' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(itemRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemRoutingModule { }