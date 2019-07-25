import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'curlistings', loadChildren: './curlistings/curlistings.module#CurlistingsPageModule' },
    { path: 'newlistings', loadChildren: './newlistings/newlistings.module#NewlistingsPageModule' },
    { path: 'viewlisting', loadChildren: './viewlisting/viewlisting.module#ViewlistingPageModule' },
    { path: 'updatelisting', loadChildren: './updatelisting/updatelisting.module#UpdatelistingPageModule' },
    { path: 'viewbookings', loadChildren: './viewbookings/viewbookings.module#ViewbookingsPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map