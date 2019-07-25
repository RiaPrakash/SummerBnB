import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        //   this.users = [
        //     {
        //       name: 'Byron',
        //       lastName: 'de Villiers',
        //       email: 'byron@mail.com',
        //       cellPhone: 828073593
        //     }
        //   ];
        // }
    }
    // getUsers(): Array<User> {
    //   return this.users;
    // }
    getAllUsers() {
        this.http.get('http://localhost:5000/api/users/').subscribe((response) => {
            this.allUsers = response;
            console.log(this.allUsers);
        });
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map