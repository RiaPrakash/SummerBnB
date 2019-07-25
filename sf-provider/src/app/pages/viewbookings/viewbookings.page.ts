import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service'

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.page.html',
  styleUrls: ['./viewbookings.page.scss'],
})
export class ViewbookingsPage implements OnInit {

  listing: any;
  bookings: any;

  // mkae all in booking service
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    
    this.listing = this.listingService.getListing();
    console.log("listing is ", this.listing);
    console.log("listing id is ", this.listing.listingID);
    this.listingService.getBookings(this.listing.listingID).subscribe((data) => {
      this.bookings = data;
      console.log("bookings are", this.bookings);
    });
    
  }

  accept(booking){
    booking.status = "accepted";
    this.listingService.updateBooking(booking);
  }

  reject(booking){
    booking.status = "rejected";
    this.listingService.updateBooking(booking);
  }

}
