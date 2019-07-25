import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserComponent = class UserComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.users = this.userService.getAllUsers();
    }
};
UserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map