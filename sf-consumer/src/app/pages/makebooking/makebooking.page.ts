import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { ListingService } from 'src/app/services/listing.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-makebooking',
  templateUrl: './makebooking.page.html',
  styleUrls: ['./makebooking.page.scss'],
})
export class MakebookingPage implements OnInit {

  newbooking: Booking;

  constructor(private listingService: ListingService, private authServiceService: AuthServiceService, private navCtrl: NavController) { 
    this.newbooking = new Booking();
  }

  ngOnInit() {
    if (this.authServiceService.getProfile()){
      // Set newbooking default details
      this.newbooking.listingId = this.listingService.getListing().listingID;
      this.newbooking.userId = this.authServiceService.getProfile().Id;
      this.newbooking.hostId = this.listingService.getListing().userId;
      this.newbooking.status = "new";
    } 
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }
  }

  book(){
    this.listingService.makeBooking(this.newbooking);
  }
}
