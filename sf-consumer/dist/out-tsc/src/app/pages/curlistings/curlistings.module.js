import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CurlistingsPage } from './curlistings.page';
var routes = [
    {
        path: '',
        component: CurlistingsPage
    }
];
var CurlistingsPageModule = /** @class */ (function () {
    function CurlistingsPageModule() {
    }
    CurlistingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CurlistingsPage]
        })
    ], CurlistingsPageModule);
    return CurlistingsPageModule;
}());
export { CurlistingsPageModule };
//# sourceMappingURL=curlistings.module.js.map