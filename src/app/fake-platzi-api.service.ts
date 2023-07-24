import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakePlatziApiService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products'; // Coloca la URL correcta de la APIREST

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/catalog`); // Ajusta la ruta para obtener el catálogo desde la API
  }

  // Otros métodos para obtener servicios y productos si están disponibles en la APIREST
}
