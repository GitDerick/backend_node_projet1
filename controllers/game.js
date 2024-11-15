// External import
const jwt = require('jsonwebtoken');

//Internal imports
const User = require('../models/User');

exports.wins = (req, res) => {
    // Extraction de l'ID
    const { id } = req;

    // Incrémentation du pointage de l'utilisateur par son ID
    User.incrementScoreById(id);

    // Renvoi d'une réponse réussie
    return res.status(200).send('Pointage mis à jour');
}


exports.lost = (req, res) => {
    // Extraction de l'ID
    const { id } = req;

    // Décrémentation du pointage de l'utilisateur par son ID
    User.decrementScoreById(id);

    // Renvoi d'une réponse réussie
    return res.status(200).send('Pointage mis à jour');
}