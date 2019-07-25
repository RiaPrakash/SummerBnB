import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashBoardComponent = class DashBoardComponent {
    constructor(router) {
        this.router = router;
        this.navItems = [
            {
                name: 'Home',
                rout: '/home'
            },
            {
                name: 'Users',
                rout: '/users'
            },
            {
                name: 'Service Providers',
                rout: '/service-providers'
            }
        ];
    }
    ngOnInit() {
        this.router.navigate(['/users']);
    }
    navTo(page) {
        debugger;
        this.router.navigate([page.rout]);
    }
};
DashBoardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dash-board',
        templateUrl: './dash-board.component.html',
        styleUrls: ['./dash-board.component.scss']
    })
], DashBoardComponent);
export { DashBoardComponent };
//# sourceMappingURL=dash-board.component.js.map