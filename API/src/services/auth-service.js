const fs = require("fs");
const User = require("../models/user-model");

const UserService = require('../services/user-service')
const userServer = new UserService();

module.exports = class AuthService {
    constructor() {}

    // Login All
    loginUser(userInput) {
        return new Promise((resolve, reject) => { 
            userServer.loginUser(userInput).then(userReturned => {
                resolve(userReturned); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

    // Register
    registerUser(user){
        // Register calls Create
        return new Promise((resolve, reject) => { 
            userServer.createUser(user).then(userReturned => {
                resolve(userReturned); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

}