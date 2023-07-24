import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakePlatziApiService {
  private apiUrl = 'https://fakeapi.platzi.com/en/rest/introduction'; // Coloca la URL correcta de la APIREST

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/catalog`); // Ajusta la ruta para obtener el catálogo desde la API
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/services`); // Ajusta la ruta para obtener los servicios desde la API
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`); // Ajusta la ruta para obtener los productos desde la API
  }
}
