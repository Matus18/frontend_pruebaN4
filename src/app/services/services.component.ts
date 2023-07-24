import { Component, OnInit } from '@angular/core';
import { FakePlatziApiService } from '../fake-platzi-api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = []; // Variable para almacenar los datos de servicios

  constructor(private fakePlatziApiService: FakePlatziApiService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.fakePlatziApiService.getServices().subscribe(
      (servicesData: any) => {
        this.services = servicesData;
      },
      (error: any) => {
        console.error('Error al obtener los datos de servicios:', error);
      }
    );
  }
}

