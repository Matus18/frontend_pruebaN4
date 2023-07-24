import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/services', pathMatch: 'full' }, // Redirigir a la página de servicios por defecto
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent } // Verifica que esta ruta esté definida correctamente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
