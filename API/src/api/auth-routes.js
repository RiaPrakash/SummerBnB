const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth-service')
const authServer = new AuthService();

// Login All
router.post('/login', (req,res) => {
    authServer.loginUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Register 
router.post('/register', (req,res) => {
    console.log("req.body is ", req.body);
    authServer.registerUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;