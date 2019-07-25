import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
var ListingService = /** @class */ (function () {
    function ListingService(http, navController) {
        this.http = http;
        this.navController = navController;
    }
    ListingService.prototype.getAllListings = function () {
        return this.http.get('http://localhost:5000/api/listings/');
    };
    // getListingByUserId() {
    //   return this.http.get('http://localhost:5000/api/listings/:userId');
    // }
    ListingService.prototype.setListing = function (listingToSet) {
        this.listing = listingToSet;
    };
    ListingService.prototype.getListing = function () {
        return this.listing;
    };
    ListingService.prototype.getBookings = function (listingId) {
        return this.http.get('http://localhost:5000/api/bookings/' + listingId);
    };
    ListingService.prototype.updateBooking = function (booking) {
        var _this = this;
        debugger;
        this.http.post('http://localhost:5000/api/bookings/update', booking).subscribe(function (response) {
            if (response.success) { // successful http request, same format as HttpResponse model / class
                _this.navController.navigateForward('listings'); // navigate to the users page
            }
            else {
                alert(response.message); // display an alert if response has an error 
            }
            console.log(response);
        });
    };
    ListingService.prototype.updateListing = function (listing) {
        var _this = this;
        this.http.post('http://localhost:5000/api/listings/update', listing, this.httpOptions).subscribe(function (response) {
            if (response.success) { // successful http request, same format as HttpResponse model / class
                _this.navController.navigateForward('listings'); // navigate to the users page
            }
            else {
                alert(response.message); // display an alert if response has an error 
            }
            console.log(response);
        });
    };
    ListingService.prototype.deleteListing = function (listing) {
        var _this = this;
        this.http.post('http://localhost:5000/api/listings/delete/' + listing.listingID, { listingID: listing.listingID }, this.httpOptions).subscribe(function (response) {
            if (response.success) { // successful http request, same format as HttpResponse model / class
                _this.navController.navigateForward('listings'); // navigate to the users page
            }
            else {
                alert(response.message); // display an alert if response has an error 
            }
            console.log(response);
        });
    };
    ListingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, NavController])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map