import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service'
import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../../services/auth-service.service'


@Component({
  selector: 'app-viewlisting',
  templateUrl: './viewlisting.page.html',
  styleUrls: ['./viewlisting.page.scss'],
})
export class ViewlistingPage implements OnInit {

  listing: any;

  constructor(private viewListingService: ListingService, private navCtrl: NavController, private authServiceService: AuthServiceService) { }

  ngOnInit() {
    if (this.authServiceService.getProfile()){
      // Get listing to view
      this.listing = this.viewListingService.getListing();
    } 
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }
  }

}
