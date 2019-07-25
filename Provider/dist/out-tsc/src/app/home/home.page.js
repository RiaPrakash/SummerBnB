import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authServiceService) {
        this.navCtrl = navCtrl;
        this.authServiceService = authServiceService;
    }
    HomePage.prototype.login = function () {
        var _this = this;
        console.log("initial default loginstatus: ", this.status);
        this.authServiceService.login(this.email, this.password, function (x) {
            _this.status = x;
            console.log("status recieved after getlogin() function was run: ", _this.status);
            if (_this.status == true) {
                _this.navToListings();
            }
        });
        // this.status  = this.authServiceService.getLoginStatus(); 
    };
    HomePage.prototype.navToListings = function () {
        this.navCtrl.navigateForward("curlistings");
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, AuthServiceService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map