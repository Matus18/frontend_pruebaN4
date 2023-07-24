import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[]; // Variable para almacenar los datos de servicios

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    // Aquí llamaremos al método para obtener los datos de servicios al inicializar el componente
    this.getServices();
  }

  getServices() {
    // Utilizamos el método del servicio para obtener los datos de servicios
    this.fakePlatziApiService.getServices().subscribe(
      (servicesData) => {
        this.services = servicesData;
      },
      (error) => {
        console.error('Error al obtener los datos de servicios:', error);
      }
    );
  }
}
