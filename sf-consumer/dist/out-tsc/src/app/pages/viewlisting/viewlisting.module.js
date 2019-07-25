import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewlistingPage } from './viewlisting.page';
var routes = [
    {
        path: '',
        component: ViewlistingPage
    }
];
var ViewlistingPageModule = /** @class */ (function () {
    function ViewlistingPageModule() {
    }
    ViewlistingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ViewlistingPage]
        })
    ], ViewlistingPageModule);
    return ViewlistingPageModule;
}());
export { ViewlistingPageModule };
//# sourceMappingURL=viewlisting.module.js.map