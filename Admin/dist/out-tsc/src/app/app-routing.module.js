import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { HomeComponent } from './components/home/home.component';
const routes = [
    { path: '', component: DashBoardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UserComponent },
    { path: 'service-providers', component: ServiceProvidersComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map