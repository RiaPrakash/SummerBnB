import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewlistingsPage } from './newlistings.page';
var routes = [
    {
        path: '',
        component: NewlistingsPage
    }
];
var NewlistingsPageModule = /** @class */ (function () {
    function NewlistingsPageModule() {
    }
    NewlistingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NewlistingsPage]
        })
    ], NewlistingsPageModule);
    return NewlistingsPageModule;
}());
export { NewlistingsPageModule };
//# sourceMappingURL=newlistings.module.js.map