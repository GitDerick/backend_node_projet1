// External import
const jwt = require('jsonwebtoken');

//Internal imports
const User = require('../models/User');

exports.getUsers = (req, res) => {

    // // Récupération des utilisateurs excepté l'administrateur
    const users = User.findExceptAdmin();

    // // Renvoi des utilisateurs
    return res.status(200).send(users);

}


exports.putUsersId = (req, res) => {
    // 1. Extraction des données de la requête
    const { email, username } = req.body;
    const { id } = req.params;

    // 2. Vérification si l'email et le nom d'utilisateur sont fournis
    if (email === undefined || username === undefined) {
        return res.status(401).send('Invalide information');
    }

    // 3. Recherche de l'utilisateur par son ID
    const found = User.findById(id);
    if (found === null) {
        return res.status(404).send('User not found');
    }

    // 4. Vérification si l'email est déjà utilisé par un autre utilisateur
    const correct = User.findByEmail(email);
    if (correct !== null) {
        return res.status(409).send('Email is already used');
    }

    // 5. Mise à jour des informations de l'utilisateur par son ID
    User.updateById(username, email);

    // 6. Renvoi d'une réponse réussie
    return res.status(200).send(`User updated with id : ${id}`);
}


exports.deleteUsersId = (req, res) => {
    // 1. Extraction de l'ID de l'utilisateur de la requête
    const { id } = req.params;

    // 2. Recherche de l'utilisateur par son ID
    const found = User.findById(id);
    if (found === null) {
        return res.status(404).send('User not found');
    }

    // 3. Suppression de l'utilisateur par son ID
    User.deleteById(id);

    // 4. Renvoi d'une réponse réussie avec 204 No content
    return res.status(204).send(`User delete with id : ${id}`);


}