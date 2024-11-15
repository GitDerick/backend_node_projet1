// External import
const jwt = require('jsonwebtoken');
 
//Internal imports
const User = require('../models/User');


exports.getMe = (req, res) => {
    // 1. Extraction des données de la requête
    const {id} = req;

    // 2. Recherche de l'utilisateur actuel par son ID
    const userme = User.findById(id);

    // 3. Renvoi de l'utilisateur actuel en tant que réponse
    return res.status(200).send(userme);

}


exports.putMe = (req, res) => {
    // Extraction des données de la requête
    const {email, username} = req.body;
    const{id} = req;
    
    // Vérification si l'email est déjà utilisé par un autre utilisateur
    const found = User.findByEmail(email);
    if(found !== null){
        return res.status(409).send('Email is already used');
    }

    // Mise à jour des informations de l'utilisateur actuel
    User.updateById(id, { username, email });

    // Renvoi d'une réponse
    return res.status(200).send('User updated');
}


exports.deleteMe = (req, res) => {
    // Extraction des données de la requête
    const {id} = req;

    // Suppression de l'utilisateur actuel par son ID
    User.deleteById(id);

    // Renvoi d'une réponse
    return res.status(204).send('User deleted');
}


exports.resetscore = (req, res) => {
    // Extraction des données de la requête
    const {id} = req.body;
    
    // Remise à zéro du pointage
    User.resetScoreById(id);

    // Renvoi d'une réponse 
    return res.status(200).send('Pointage remis à zéro');

}