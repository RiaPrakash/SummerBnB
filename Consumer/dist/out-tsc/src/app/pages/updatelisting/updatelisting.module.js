import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatelistingPage } from './updatelisting.page';
var routes = [
    {
        path: '',
        component: UpdatelistingPage
    }
];
var UpdatelistingPageModule = /** @class */ (function () {
    function UpdatelistingPageModule() {
    }
    UpdatelistingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatelistingPage]
        })
    ], UpdatelistingPageModule);
    return UpdatelistingPageModule;
}());
export { UpdatelistingPageModule };
//# sourceMappingURL=updatelisting.module.js.map