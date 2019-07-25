import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ServiceProvidersService = class ServiceProvidersService {
    constructor() {
        this.providers = [
            {
                name: 'Brett',
                lastName: 'de Villiers',
                email: 'brett@mail.com',
                cellPhone: 828073593,
                numberOfListings: 1
            },
            {
                name: 'Bob',
                lastName: 'de Villiers',
                email: 'bob@mail.com',
                cellPhone: 883763829,
                numberOfListings: 5
            },
            {
                name: 'Big',
                lastName: 'de Villiers',
                email: 'big@mail.com',
                cellPhone: 874629380,
                numberOfListings: 3
            }
        ];
    }
    getProviders() {
        return this.providers;
    }
    addProvider(providertoadd) {
        this.providers.push(providertoadd);
    }
};
ServiceProvidersService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ServiceProvidersService);
export { ServiceProvidersService };
//# sourceMappingURL=service-providers.service.js.map