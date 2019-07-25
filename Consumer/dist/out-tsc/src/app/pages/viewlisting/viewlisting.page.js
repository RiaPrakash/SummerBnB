import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingService } from '../services/listing.service';
var ViewlistingPage = /** @class */ (function () {
    function ViewlistingPage(viewListingService) {
        this.viewListingService = viewListingService;
    }
    ViewlistingPage.prototype.ngOnInit = function () {
        this.listing = this.viewListingService.getListing();
    };
    ViewlistingPage = tslib_1.__decorate([
        Component({
            selector: 'app-viewlisting',
            templateUrl: './viewlisting.page.html',
            styleUrls: ['./viewlisting.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ListingService])
    ], ViewlistingPage);
    return ViewlistingPage;
}());
export { ViewlistingPage };
//# sourceMappingURL=viewlisting.page.js.map