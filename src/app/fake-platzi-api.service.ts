import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakePlatziApiService {
  private fakeApiUrl = 'https://fakeapi.platzi.com/en/rest/introduction'; // URL de la API FakePlatzi
  private escuelaJsApiUrl = 'https://api.escuelajs.co/api/v1/products'; // URL de la API de EscuelaJS

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<any[]> {
    return this.http.get<any[]>(`${this.fakeApiUrl}/catalog`);
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.fakeApiUrl}/services`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.escuelaJsApiUrl); // Llamada a la nueva API para obtener productos
  }
}
