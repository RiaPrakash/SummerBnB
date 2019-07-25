import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '../models/http-response';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';
import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  listing: any;

  httpOptions: {
    headers: HttpHeaders
  };

  constructor(private http: HttpClient, private navController: NavController, private authService: AuthServiceService) { }

  setListing(listingToSet) {
    this.listing = listingToSet;
  }

  getListing() {
    return this.listing;
  }

  getAllListings() {
    return this.http.get('http://localhost:5000/api/listings/');
  }

  getBookingsByuserId(name: string, userId: Int16Array){
    return this.http.get('http://localhost:5000/api/bookings/' + name + '/' + userId);
  }

  makeBooking(booking){
    this.http.post('http://localhost:5000/api/bookings/add', booking).subscribe((response: HttpResponse) => {
      if (response) { // successful http request, same format as HttpResponse model / class
        if (response.toString() == "booking already exists"){
          alert("Booking unsucessful. Try again!");
        } else {
          this.navController.navigateForward('curlistings'); // navigate to the users page
        }
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  updateBooking(booking) {
    this.http.post('http://localhost:5000/api/bookings/update', booking).subscribe((response: HttpResponse) => {
      if (response) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('curlistings'); // navigate to the users page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  updateListing(listing: any) {
    this.http.post('http://localhost:5000/api/listings/update', listing, this.httpOptions).subscribe((response: HttpResponse) => {
      if (response) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('curlistings'); // navigate to the users page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  deleteListing(listing: any) {
    this.http.post('http://localhost:5000/api/listings/delete/' + listing.listingID, { listingID: listing.listingID }, this.httpOptions).subscribe((response: HttpResponse) => {
      if (response) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('curlistings'); // navigate to the users page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

  createListing(newlisting: Listing){
    this.http.post('http://localhost:5000/api/listings/add', newlisting, this.httpOptions).subscribe((response: HttpResponse) => {
      if (response) { // successful http request, same format as HttpResponse model / class
        this.navController.navigateForward('curlistings'); // navigate to the users page
      }
      else {
        alert(response.message); // display an alert if response has an error 
      }
      console.log(response);
    });
  }

}

