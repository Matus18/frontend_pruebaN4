import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Agrega un valor inicial vacío para la variable 'products'

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    // Aquí llamaremos al método para obtener los datos de productos al inicializar el componente
    this.getProducts();
  }

  getProducts() {
    // Utilizamos el método del servicio para obtener los datos de productos
    this.fakePlatziApiService.getProducts().subscribe(
      (productsData: any) => { // Define el tipo de 'productsData' como 'any'
        this.products = productsData;
      },
      (error: any) => { // Define el tipo de 'error' como 'any'
        console.error('Error al obtener los datos de productos:', error);
      }
    );
  }
}
