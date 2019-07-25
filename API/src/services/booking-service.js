const fs = require("fs");
const Booking = require("../models/booking-model");

module.exports = class BookingService{
    constructor() { }

    // Get all
    findBookings() {
        return new Promise((resolve, reject) => {
            Booking.findAllBookings((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }
    
    // Find by listingId
    findBookingBylistingId(listingId){
        return new Promise((resolve, reject) => {
            Booking.findBookingBylistingId(listingId, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Find by userId
    findBookingByuserId(name, userId){
        return new Promise((resolve, reject) => {
            Booking.findBookingByuserId(name, userId, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Create
    addBooking(bookingReq) {
        return new Promise((resolve, reject) => {
            Booking.findBookingBylistingId(bookingReq.listingId, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { 
                    Booking.addBooking(bookingReq, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("booking already exists");
                }
            })
        });
    }

    // Delete
    deleteBooking(bookingId) {
        return new Promise((resolve, reject) => {
            Booking.findBookingBybookingId(bookingId, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length > 0) { 
                    Booking.deleteBooking(bookingId, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("booking does not exist");
                }
            })
        });
    }

    // Delete by User Id
    deleteBookingByUserId(userId) {
        return new Promise((resolve, reject) => {
            Booking.findBookingBybookingUserId(userId, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length > 0) { 
                    console.log("about to del booking: ", res.id);
                    Booking.deleteBooking(res.Id, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("booking does not exist");
                }
            })
        });
    }

    // Delete by Host Id
    deleteBookingByHostId(userId) {
        return new Promise((resolve, reject) => {
            Booking.findBookingBybookingHostId(hostId, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length > 0) { 
                    Booking.deleteBooking(res.Id, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("booking does not exist");
                }
            })
        });
    }

    

    // Update
    updateBooking(bookingReq) {
        return new Promise((resolve, reject) => {
            console.log("in server for upodate booking");
            Booking.findBookingBybookingId(bookingReq.Id, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length > 0) { 
                    Booking.updateBooking(bookingReq, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("booking does not exist");
                }
            })
        });
    }

}