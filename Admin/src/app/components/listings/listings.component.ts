import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listings: any;

  constructor(private listingService: ListingService, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.getProfile()) {
      this.listingService.getAllListings().subscribe(response => {
        this.listings = response;
      });
    }
    else {
      alert("Not logged in! You must log in first");
      // Cheating, assuming Admin opens on port 4200
      window.location.replace("http://localhost:4200/login");
    }

  }

}
