import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingService } from '../../services/listing.service';
var ViewbookingsPage = /** @class */ (function () {
    // mkae all in booking service
    function ViewbookingsPage(listingService) {
        this.listingService = listingService;
    }
    ViewbookingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.listing = this.listingService.getListing();
        console.log("listing is ", this.listing);
        console.log("listing id is ", this.listing.listingID);
        this.listingService.getBookings(this.listing.listingID).subscribe(function (data) {
            _this.bookings = data;
            console.log("bookings are", _this.bookings);
        });
    };
    ViewbookingsPage.prototype.accept = function (booking) {
        booking.status = "accept";
        this.listingService.updateBooking(booking);
    };
    ViewbookingsPage.prototype.reject = function (booking) {
        booking.status = "reject";
        this.listingService.updateBooking(booking);
    };
    ViewbookingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-viewbookings',
            templateUrl: './viewbookings.page.html',
            styleUrls: ['./viewbookings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ListingService])
    ], ViewbookingsPage);
    return ViewbookingsPage;
}());
export { ViewbookingsPage };
//# sourceMappingURL=viewbookings.page.js.map