import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/listing';
import { ListingService } from '../../services/listing.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { User } from '../../models/user';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-newlistings',
  templateUrl: './newlistings.page.html',
  styleUrls: ['./newlistings.page.scss'],
})
export class NewlistingsPage implements OnInit {

  newlisting: Listing;
  user: User;

  constructor(private listingService: ListingService, private authServiceService: AuthServiceService ) { }

  ngOnInit() {
    this.newlisting = new Listing();

    this.user = this.authServiceService.getProfile();
    this.newlisting.userId =  this.user.Id;
  }

  create(){
    console.log("about to create: ", this.newlisting);
    this.listingService.createListing(this.newlisting);
  }

}
