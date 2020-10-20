import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemRoutingModule } from'./services/item-routing.module'
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

@NgModule({
  
  declarations: [
    AppComponent,
    ItemComponent,
    HeaderComponent,
    CartComponent,
    ItemListComponent,
    HomeComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    ItemRoutingModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
