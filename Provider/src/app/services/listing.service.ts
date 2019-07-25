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

  getAllListings() {
    return this.http.get('http://localhost:5000/api/listings/');
  }

  setListing(listingToSet) {
    this.listing = listingToSet;
  }

  getListing() {
    return this.listing;
  }

  getBookings(listingId: number) {
    return this.http.get('http://localhost:5000/api/bookings/' + listingId);
  }

  updateBooking(booking) {
    // debugger
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
        alert("Listing has been deleted!");
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

