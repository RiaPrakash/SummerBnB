import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewbookingsPage } from './viewbookings.page';
var routes = [
    {
        path: '',
        component: ViewbookingsPage
    }
];
var ViewbookingsPageModule = /** @class */ (function () {
    function ViewbookingsPageModule() {
    }
    ViewbookingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ViewbookingsPage]
        })
    ], ViewbookingsPageModule);
    return ViewbookingsPageModule;
}());
export { ViewbookingsPageModule };
//# sourceMappingURL=viewbookings.module.js.map