import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http, navController) {
        this.http = http;
        this.navController = navController;
        this.loggedin = false;
    }
    // getLoginStatus(): boolean{
    //   console.log("value being returned by getLoginStatus: ", this.loggedin);
    //   return this.loggedin;
    // }
    AuthServiceService.prototype.login = function (email, password, callback) {
        this.http.post('http://localhost:5000/api/auth/login', { email: email, password: password }).subscribe(function (response) {
            console.log("response recieved by backend login: ", response);
            // this.loggedin = response;
            callback(response);
        });
    };
    AuthServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, NavController])
    ], AuthServiceService);
    return AuthServiceService;
}());
export { AuthServiceService };
//# sourceMappingURL=auth-service.service.js.map