import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalog: any[]; // Variable para almacenar los datos del catálogo

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    // Aquí llamaremos al método para obtener los datos del catálogo al inicializar el componente
    this.getCatalog();
  }

  getCatalog() {
    // Utilizamos el método del servicio para obtener los datos del catálogo
    this.fakePlatziApiService.getCatalog().subscribe(
      (catalogData) => {
        this.catalog = catalogData;
      },
      (error) => {
        console.error('Error al obtener los datos del catálogo:', error);
      }
    );
  }
}
