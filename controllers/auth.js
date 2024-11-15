// External imports
const jwt = require('jsonwebtoken')

const User = require('../models/User')

exports.login = (req, res) => {

    // 1. Recupérer email, password du body
    const { email, password } = req.body;

    // 2. M'assurer que email et password ne sont pas undefined ou ''
    if (email === undefined || password === undefined || email.trim() === '' || password.trim() === '') { // "trim" permet d'enlever les espaces devant ou derriere)
        res.status(400).send('Invalid body');
    }

    // 3. Trouver utilisateur avec email
    const correct = User.findByEmail(email);
    if (correct === null) {
        return res.status(401).send('No user found with  this email')
    }

    // 4. Comparer les passwords
    if (correct.password !== password) {
        return res.status(401).send('No user found with this information')
    }

    // 5. Génération du token JWT pour l'authentification
    const token = jwt.sign({ 'id': correct.id }, 'tp1')

    // 6. Envoi du token
    res.send(token);
}



exports.register = (req, res) => {
    // 1. Extraction des données de la requête
    const { email, password, username } = req.body;

    // 2. Vérification si l'email, le mot de passe et le nom d'utilisateur sont fournis
    if (email === undefined || password === undefined || username === undefined) {
        return res.status(400).send('Invalid body');
    }

    // 3. Vérification si l'email est déjà utilisé
    const correct = User.findByEmail(email);
    if (correct !== null) {
        return res.status(409).send('Email is already used');
    }

    User.create(req.body);

    // 4. Génération du token JWT pour l'authentification
    const token = jwt.sign({ 'id': User.id }, 'tp1');

    // 5. Envoi du token
    res.status(201).send(token);

}