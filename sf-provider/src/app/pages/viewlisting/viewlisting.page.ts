import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service'


@Component({
  selector: 'app-viewlisting',
  templateUrl: './viewlisting.page.html',
  styleUrls: ['./viewlisting.page.scss'],
})
export class ViewlistingPage implements OnInit {

  listing: any;

  constructor(private viewListingService: ListingService) { }

  ngOnInit() {
    this.listing = this.viewListingService.getListing();
  }

}
