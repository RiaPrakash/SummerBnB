const fs = require("fs");
const User = require("../models/user-model");

module.exports = class UserService {

    constructor() { }

    // Get All
    findUsers() {
        return new Promise((resolve, reject) => {
            User.findAllUsers((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Get All of type User
    findUsersOfTypeUser() {
        return new Promise((resolve, reject) => {
            User.findAllUsersOfTypeUser((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Get All of type Provider
    findUsersOfTypeProvider() {
        return new Promise((resolve, reject) => {
            User.findAllUsersOfTypeProvider((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Get by Id
    findUserById(userId) {
        return new Promise((resolve, reject) => {
            User.findUserById(userId, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Get by Role
    findUserByRole(userRole) {
        return new Promise((resolve, reject) => {
            User.findUserByRole(userRole, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Get by Email
    findUserByEmail(role, email) {
        return new Promise((resolve, reject) => {
            User.findUserByEmail(role, email, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }


    // Create/Register
    createUser(userReq) {
        return new Promise((resolve, reject) => {
            console.log('USER REQUEST: ', userReq);
            console.log('USER NAME: ', userReq.name);
            User.findUserByEmail(userReq.role, userReq.email, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                else if (res.length < 1) { // create user
                    User.createUser(userReq, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(userReq);
                    });
                }
                else {
                    reject("user already exists");
                }
            })
        });
    }

    // Delete
    deleteUser(userId) {
        return new Promise((resolve, reject) => {
            User.findUserById(userId, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length > 0) { // delete user
                    User.deleteUser(userId, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("user does not exist");
                }
            })
        });
    }

    // Update
    updateUser(userReq) {
        return new Promise((resolve, reject) => {
            User.updateUser(userReq, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                else{
                    resolve(res);
                }
            })
        });
    }

    // Login All
    loginUser(userReq) {
        return new Promise((resolve, reject) => {
            User.findUserByEmailAndPasswordAndRole(userReq, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                else{
                    resolve(res);
                }
            })
        });
    }

}