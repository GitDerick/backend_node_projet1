// External imports
const express = require('express');

// Variables
const router = express.Router();


//internal import
const {
    getUsers,
    putUsersId,
    deleteUsersId,
} = require('../controllers/users');

const { protect, isAdmin } = require('../utilisateurs/auth');



// CRUD Routes
router.route('')
    .get(protect, getUsers);                   // http://localhost:2000/users

router.route('/:id')
    .put(protect, isAdmin, putUsersId)         // http://localhost:2000/users/id
    .delete(protect, isAdmin, deleteUsersId);  // http://localhost:2000/users/id



// Exports 
module.exports = router;