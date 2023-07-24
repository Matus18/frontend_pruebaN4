import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = []; // Variable para almacenar los datos de productos

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.fakePlatziApiService.getProducts().subscribe(
      (productsData: any) => {
        this.products = productsData;
      },
      (error: any) => {
        console.error('Error al obtener los datos de productos:', error);
      }
    );
  }
}
