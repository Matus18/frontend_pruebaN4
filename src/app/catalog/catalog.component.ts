import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalog: any[] = []; // Agrega un valor inicial vacío para la variable 'catalog'

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    // Aquí llamaremos al método para obtener los datos del catálogo al inicializar el componente
    this.getCatalog();
  }

  getCatalog() {
    // Utilizamos el método del servicio para obtener los datos del catálogo
    this.fakePlatziApiService.getCatalog().subscribe(
      (catalogData: any) => { // Define el tipo de 'catalogData' como 'any'
        this.catalog = catalogData;
      },
      (error: any) => { // Define el tipo de 'error' como 'any'
        console.error('Error al obtener los datos del catálogo:', error);
      }
    );
  }
}
