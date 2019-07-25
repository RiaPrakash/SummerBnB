const express = require('express');
const router = express.Router();

const BookingService = require('../services/booking-service')
const bookingServer = new BookingService();

// Get All
router.get('/', (req,res) => {
    bookingServer.findBookings().then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

// Get by listingId
router.get('/:listingId', (req,res) => {
    bookingServer.findBookingBylistingId(req.params.listingId).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Get by userId
router.get('/:name/:userId', (req,res) => {
    bookingServer.findBookingByuserId(req.params.name, req.params.userId).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Add
router.post('/add', (req,res) => {
    bookingServer.addBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// Delete
router.post('/delete', (req,res) => {
    bookingServer.deleteBooking(req.body.Id).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// Delete by UserId
router.post('/delete/user', (req,res) => {
    bookingServer.deleteBookingByUserId(req.body.Id).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// Delete by HostId
router.post('/delete/host/:ID', (req,res) => {
    bookingServer.deleteBookingByHostId(req.params.ID).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// Update
router.post('/update', (req,res) => {
    bookingServer.updateBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;