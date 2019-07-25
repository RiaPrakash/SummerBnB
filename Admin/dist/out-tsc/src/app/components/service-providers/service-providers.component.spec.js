import { async, TestBed } from '@angular/core/testing';
import { ServiceProvidersComponent } from './service-providers.component';
describe('ServiceProvidersComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ServiceProvidersComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceProvidersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=service-providers.component.spec.js.map