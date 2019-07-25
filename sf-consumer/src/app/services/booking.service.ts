import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '../models/http-response';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private navController: NavController) { }

  deleteBooking(booking, callback) {
    this.http.post('http://localhost:5000/api/bookings/delete/', booking).subscribe((response: HttpResponse) => {
      if (response) { 
        this.navController.navigateForward('curlistings'); 
        callback(response);
      }
      else {
        alert(response.message);  
      }
    });
  }

}
