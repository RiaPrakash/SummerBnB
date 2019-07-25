const fs = require("fs");
const Listing = require("../models/listing-model");

module.exports = class ListingService{
    constructor() { }

    // Get all
    findListings() {
        return new Promise((resolve, reject) => {
            Listing.findAllListings((err, res) => {
                if (err) {
                    reject(err);
                }
                console.log("found lisitng!");
                resolve(res);
            });
        });
    }

    // Get by userId
    findListingByuserId(userId) {
        return new Promise((resolve, reject) => {
            Listing.findListingByuserId(userId, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    // Create
    addListing(listingReq) {
        return new Promise((resolve, reject) => {
            Listing.findListingBytitle(listingReq.title, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { 
                    Listing.addListing(listingReq, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("listing already exists");
                }
            })
        });
    }

    // Delete
    deleteListing(listingId) {
        return new Promise((resolve, reject) => {
            Listing.findListingBylistingId(listingId, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length > 0) { 
                    Listing.deleteListing(listingId, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("listing does not exist");
                }
            })
        });
    }

    // Update
    updateListing(listingReq) {
        return new Promise((resolve, reject) => {
            Listing.findListingBylistingId(listingReq.listingID, (err, res) => { 
                if (err) {
                    reject(err);
                }
                if (res.length > 0) { 
                    console.log("listing found");
                    Listing.updateListing(listingReq, (err, res) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("listing does not exist");
                }
            })
        });
    }

}