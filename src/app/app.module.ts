import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de importar AppRoutingModule

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegúrate de agregar AppRoutingModule en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
