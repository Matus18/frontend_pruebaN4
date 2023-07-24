import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakePlatziApiService {
  private baseUrl = 'https://fakeapi.platzi.com/en/rest';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<any[]>(url);
  }

  getProducts(): Observable<any[]> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<any[]>(url);
  }

  // Agrega aquí otros métodos para consumir la API si lo necesitas
}
