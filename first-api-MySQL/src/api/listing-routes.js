const express = require('express');
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();

// Get All
router.get('/', (req,res) => {
    listingServer.findListings().then(listings => {
        res.json(listings);
    }).catch(err => {
        res.json(err);
    });
});

// Get by Id
router.get('/:userId', (req,res) => {
    listingServer.findListingByuserId(req.params.userId).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Add
router.post('/add', (req,res) => {
    console.log("in add");
    listingServer.addListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// Delete
router.post('/delete/:listingID', (req,res) => {
    listingServer.deleteListing(req.params.listingID).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

// Update
router.post('/update', (req,res) => {
    console.log("im uodate");
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;