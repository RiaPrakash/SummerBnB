import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Listing } from '../../models/listing';

@Component({
  selector: 'app-curlistings',
  templateUrl: './curlistings.page.html',
  styleUrls: ['./curlistings.page.scss'],
})
export class CurlistingsPage implements OnInit {

  listings: any;
  listingsview: any;

  constructor( private navCtrl: NavController, private listingService: ListingService, private authServiceService: AuthServiceService
  ) { 
  }

  onSearch(event){
    console.log("search stuff: ", event.target.value);
    const regexp = new RegExp(event.target.value);
    this.listingsview = this.listings.filter(listing => regexp.test(listing.title));
  }

  ngOnChanges(){
    console.log("in onchanges");
    this.authServiceService.getAllListings().subscribe(response => {
      console.log("listings are: ", response);
      this.listings = response;
      this.listingsview = response;
      });
  }

  ionViewWillEnter() {
    this.authServiceService.getAllListings().subscribe(response => {
      console.log("listings are: ", response);
      this.listings = response;
      this.listingsview = response;
    });
  }

  ngOnInit() {
    console.log("in oninit");
    // Only show page if a user is logged in
    if (this.authServiceService.getProfile()){
      console.log("got profile, now getting listings");
      this.authServiceService.getAllListings().subscribe(response => {
        console.log("listings are: ", response);
        this.listings = response;
        this.listingsview = response;
        });
    } 
    // Redirect to login page if not logged in
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }
  }

  navToViewProfile(){
    this.navCtrl.navigateForward("viewprofile");
  }

  navToViewBookings() {
    this.navCtrl.navigateForward("viewbookings");
  }

  navToViewDetails(listing) {
    this.listingService.setListing(listing);
    this.navCtrl.navigateForward("viewlisting");
  }

  navToMakeBooking(listing) {
    this.listingService.setListing(listing);
    this.navCtrl.navigateForward("makebooking");
  }

}
