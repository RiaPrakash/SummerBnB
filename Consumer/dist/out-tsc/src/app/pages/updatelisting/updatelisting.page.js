import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingService } from '../../services/listing.service';
var UpdatelistingPage = /** @class */ (function () {
    function UpdatelistingPage(listingService) {
        this.listingService = listingService;
    }
    UpdatelistingPage.prototype.ngOnInit = function () {
        this.updatedlisting = this.listingService.getListing();
    };
    UpdatelistingPage.prototype.update = function () {
        this.listingService.updateListing(this.updatedlisting);
    };
    UpdatelistingPage.prototype.delete = function () {
        this.listingService.deleteListing(this.updatedlisting);
    };
    UpdatelistingPage = tslib_1.__decorate([
        Component({
            selector: 'app-updatelisting',
            templateUrl: './updatelisting.page.html',
            styleUrls: ['./updatelisting.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ListingService])
    ], UpdatelistingPage);
    return UpdatelistingPage;
}());
export { UpdatelistingPage };
//# sourceMappingURL=updatelisting.page.js.map