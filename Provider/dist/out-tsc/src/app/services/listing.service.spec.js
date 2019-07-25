import { TestBed } from '@angular/core/testing';
import { ListingService } from './listing.service';
describe('ViewListingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ListingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=listing.service.spec.js.map