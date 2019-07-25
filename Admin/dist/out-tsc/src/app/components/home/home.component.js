import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ServiceProvider } from '../../models/service-provider';
let HomeComponent = class HomeComponent {
    constructor(userService, serviceProvidersService) {
        this.userService = userService;
        this.serviceProvidersService = serviceProvidersService;
        this.newuser = new User();
        this.newprovider = new ServiceProvider();
    }
    ngOnInit() {
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map