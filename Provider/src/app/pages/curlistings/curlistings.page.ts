import { Component, OnInit, OnChanges } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-curlistings',
  templateUrl: './curlistings.page.html',
  styleUrls: ['./curlistings.page.scss'],
})
export class CurlistingsPage implements OnInit {

  listings: any;
  listingsview: any;
  // public isSearchbarOpened = false;

  constructor(private navCtrl: NavController, private listingService: ListingService, private authServiceService: AuthServiceService
  ) { }

  onSearch(event){
    console.log("search stuff: ", event.target.value);
    const regexp = new RegExp(event.target.value);
    this.listingsview = this.listings.filter(listing => regexp.test(listing.title));
  }

  ngOnChanges() {
    this.authServiceService.getListingsByProviderId().subscribe(response => {
      console.log("listings are: ", response);
      this.listings = response;
      this.listingsview = response;
    });
  }

  ionViewWillEnter() {
    this.authServiceService.getListingsByProviderId().subscribe(response => {
      console.log("listings are: ", response);
      this.listings = response;
      this.listingsview = response;
    });
  }

  ngOnInit() {
    if (this.authServiceService.getProfile()) {
      this.authServiceService.getListingsByProviderId().subscribe(response => {
        console.log("listings are: ", response);
        this.listings = response;
        this.listingsview = response;
      });
    }
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }
  }

  navToViewProfile() {
    this.navCtrl.navigateForward("viewprofile");
  }

  navToViewDetails(listing) {
    this.listingService.setListing(listing);
    this.navCtrl.navigateForward("viewlisting");
  }

  navToUpdateListing(listing) {
    this.listingService.setListing(listing);
    this.navCtrl.navigateForward("updatelisting");
  }

  navToViewBookings(listing) {
    this.listingService.setListing(listing);
    this.navCtrl.navigateForward("viewbookings");
  }

  navToCreateNew() {
    this.navCtrl.navigateForward("newlistings");
  }

  deleteListing(listing) {
    this.listingService.deleteListing(listing);
    this.listings.pop(listing);
  }

}
