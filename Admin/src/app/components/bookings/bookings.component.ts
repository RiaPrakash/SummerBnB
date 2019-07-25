import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  bookings: any;

  constructor(private bookingService: BookingService, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.getProfile()) {
      this.bookingService.getAllBookings().subscribe(response => {
        this.bookings = response;
      });
    }
    else {
      alert("Not logged in! You must log in first");
      // Cheating, assuming Admin opens on port 4200
      window.location.replace("http://localhost:4200/login");
    }
  }

}