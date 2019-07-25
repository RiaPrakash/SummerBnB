import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ServiceProvidersComponent = class ServiceProvidersComponent {
    constructor(ServiceProvidersService) {
        this.ServiceProvidersService = ServiceProvidersService;
    }
    ngOnInit() {
        this.serviceProviders = this.ServiceProvidersService.getProviders();
    }
};
ServiceProvidersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-service-providers',
        templateUrl: './service-providers.component.html',
        styleUrls: ['./service-providers.component.scss']
    })
], ServiceProvidersComponent);
export { ServiceProvidersComponent };
//# sourceMappingURL=service-providers.component.js.map