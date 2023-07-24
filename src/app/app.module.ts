import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component'; // Asegúrate de importar el componente

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ProductsComponent // Asegúrate de agregar el componente en el arreglo de declaraciones
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
