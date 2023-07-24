import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[]; // Variable para almacenar los datos de productos

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    // Aquí llamaremos al método para obtener los datos de productos al inicializar el componente
    this.getProducts();
  }

  getProducts() {
    // Utilizamos el método del servicio para obtener los datos de productos
    this.fakePlatziApiService.getProducts().subscribe(
      (productsData) => {
        this.products = productsData; // Utilizamos "productsData" en lugar de "productos"
      },
      (error) => {
        console.error('Error al obtener los datos de productos:', error);
      }
    );
  }
}
