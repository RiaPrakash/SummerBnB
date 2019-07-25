import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-updatelisting',
  templateUrl: './updatelisting.page.html',
  styleUrls: ['./updatelisting.page.scss'],
})
export class UpdatelistingPage implements OnInit {

  updatedlisting: any;

  constructor(private listingService: ListingService, private authServiceService: AuthServiceService, private navCtrl: NavController) { }

  ngOnInit() {
    if (this.authServiceService.getProfile()) {
      this.updatedlisting = this.listingService.getListing();
    }
    else {
      alert("Not logged in! You must log in first");
      this.navCtrl.navigateForward("home");
    }
    
  }

  update(){
    this.listingService.updateListing(this.updatedlisting);
  }

  delete(){
    this.listingService.deleteListing(this.updatedlisting);

  }

}
