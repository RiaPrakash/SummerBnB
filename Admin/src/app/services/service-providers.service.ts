import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidersService {

  constructor(private http: HttpClient) {}

  getAllProviders() {
    return this.http.get('http://localhost:5000/api/users/role-provider');
  }
}
