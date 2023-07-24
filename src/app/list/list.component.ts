import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  services: any[] = []; // Agrega un valor inicial vacío para la variable 'services'

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    // Aquí llamaremos al método para obtener los datos de servicios al inicializar el componente
    this.getServices();
  }

  getServices() {
    // Utilizamos el método del servicio para obtener los datos de servicios
    this.fakePlatziApiService.getServices().subscribe(
      (servicesData: any) => { // Define el tipo de 'servicesData' como 'any'
        this.services = servicesData;
      },
      (error: any) => { // Define el tipo de 'error' como 'any'
        console.error('Error al obtener los datos de servicios:', error);
      }
    );
  }
}
