const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');
const userServer = new UserService();

// Get All
router.get('/', (req,res) => {
    userServer.findUsers().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

// Get User of Role User
router.get('/role-user', (req,res) => {
    userServer.findUsersOfTypeUser().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

// Get User of Role Provider
router.get('/role-provider', (req,res) => {
    userServer.findUsersOfTypeProvider().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

// Get by Id
router.get('/:id', (req,res) => {
    userServer.findUserById(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Get by Role
router.get('/:role', (req,res) => {
    userServer.findUserByRole(req.params.role).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Get by Email
router.get('/:role/:email', (req,res) => {
    userServer.findUserByEmail(req.params.role, req.params.email).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});


// Create new user
router.post('/create', (req,res) => {
    userServer.createUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Delete
router.post('/delete', (req,res) => {
    userServer.deleteUser(req.body.Id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

// Update
router.post('/update', (req,res) => {
    userServer.updateUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;