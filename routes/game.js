// External imports
const express = require('express');

// Internal imports
const { wins, lost } = require('../controllers/game');


const { protect } = require('../utilisateurs/auth');

// Variables
const router = express.Router();

router.route('/wins')
    .put(protect, wins);   // http://localhost:2000/game/wins

router.route('/lost')
    .put(protect, lost);   // http://localhost:2000/game/lost

module.exports = router;