import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
var CurlistingsPage = /** @class */ (function () {
    function CurlistingsPage(navCtrl, listingService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
    }
    CurlistingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.listingService.getAllListings().subscribe(function (response) {
            _this.listings = response;
        });
    };
    CurlistingsPage.prototype.navToViewDetails = function (listing) {
        this.listingService.setListing(listing);
        this.navCtrl.navigateForward("viewlisting");
    };
    CurlistingsPage.prototype.navToUpdateListing = function (listing) {
        this.listingService.setListing(listing);
        this.navCtrl.navigateForward("updatelisting");
    };
    CurlistingsPage.prototype.navToViewBookings = function (listing) {
        this.listingService.setListing(listing);
        this.navCtrl.navigateForward("viewbookings");
    };
    CurlistingsPage.prototype.navToCreateNew = function () {
        this.navCtrl.navigateForward("newlistings");
    };
    CurlistingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-curlistings',
            templateUrl: './curlistings.page.html',
            styleUrls: ['./curlistings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, ListingService])
    ], CurlistingsPage);
    return CurlistingsPage;
}());
export { CurlistingsPage };
//# sourceMappingURL=curlistings.page.js.map