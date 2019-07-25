import { TestBed } from '@angular/core/testing';
import { ServiceProvidersService } from './service-providers.service';
describe('ServiceProvidersService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ServiceProvidersService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=service-providers.service.spec.js.map