import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { NavController } from '@ionic/angular';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.page.html',
  styleUrls: ['./viewbookings.page.scss'],
})
export class ViewbookingsPage implements OnInit {

  // Didn't let me set this to type Booking
  bookings: any;
  

  constructor(private listingService: ListingService, private authServiceService: AuthServiceService, private navCtrl: NavController, private bookingService: BookingService) { }

  ngOnInit() {
    if (this.authServiceService.getProfile()){
      // Get bookings to view
      this.listingService.getBookingsByuserId(this.authServiceService.getProfile().name, this.authServiceService.getProfile().Id).subscribe((data) => {
        this.bookings = data;
      });
    } 
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }   
  }

  cancel(booking: Booking){
    this.bookingService.deleteBooking(booking, (x) => {
      if (x == "booking already exists") {
        alert("Booking unsucessful. Try again!");
      }
      else {
        this.navCtrl.navigateForward("curlistings");
      }
    });
  }


}
