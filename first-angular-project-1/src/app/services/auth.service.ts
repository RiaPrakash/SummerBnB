import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Gives us structure for data we're geting back from API
class ResponseObject {
  success: boolean;
  message: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token: string;

  constructor(private http: HttpClient) { }

  login(email, password) {
    this.http.post('http://localhost:5000/api/auth/login', {email: email, password: password}).subscribe((response: ResponseObject) => {
      if (response.success) {
        this.token = response.data;
      }
      console.log(response);
    });
  }

  getToken(): string {
    return this.token
  }

}

