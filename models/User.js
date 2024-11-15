const users = [
    {
        'id': 1,
        'username': 'DerickAgouda',
        'email': 'derickagouda@gmail.com',
        'password': 'AAAaaa111',
        'isAdmin': true,
        'score': 0,

    },
    {
        'id': 2,
        'username': 'Challenger',
        'email': 'Challenger@gmail.com',
        'password': 'ch111',
        'isAdmin': false,
        'score': 0,
    }
];


exports.find = () => {
    // Retourne tous les utilisateurs
    return users;
}

const getNewId = () => {
    // Vérifie si des utilisateurs existent
    if (users.length > 0) {
        // Retourne le dernier ID + 1
        return users[users.length - 1].id + 1;
    }

    // S'il n'y a pas d'utilisateurs, retourne 1 comme premier ID
    return 1;
}

exports.create = (user) => {
    // Affecte un nouvel ID à l'utilisateur
    user.id = getNewId();
    // Définit isAdmin comme false par défaut
    user.isAdmin = false;
    // Ajoute l'utilisateur à la liste des utilisateurs
    users.push(user);
    // Renvoie l'utilisateur créé
    return user;
}

exports.findExceptAdmin = () => {
    // Initialisation d'un nouvel array pour stocker les utilisateurs sauf les administrateurs
    const usersExceptAdmin = [];
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération de l'utilisateur courant
        const user = users[i];
        // Vérifie si l'utilisateur n'est pas un administrateur
        if (!user.isAdmin) {
            // Ajoute l'utilisateur à la liste des utilisateurs non-admin
            usersExceptAdmin.push(user);
        }
    }

    // Renvoie la liste des utilisateurs non-admin
    return usersExceptAdmin;
}


exports.findByEmail = (email) => {
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération de l'utilisateur courant
        const user = users[i];
        // Vérifie si l'e-mail correspond
        if (user.email === email) {
            // Renvoie l'utilisateur trouvé
            return user;
        }
    }

    // Si aucun utilisateur correspondant n'est trouvé, renvoie null
    return null;
}


exports.findById = (id) => {
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération du user courant
        const user = users[i];

        // Vérification si l'ID du user correspond à celui fourni
        if (user.id === parseInt(id)) {
            // Retourne le user si l'ID correspond
            return user;
        }
    }

    // Retourne null si aucun user avec cet ID n'est trouvée
    return null;
}


exports.updateById = (id, data) => {
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération de l'utilisateur courant
        const user = users[i];
        // Vérification si l'ID correspond
        if (user.id === id) {
            // Mise à jour des données de l'utilisateur
            users[i] = data;
            // Sortie de la fonction
            return;
        }
    }
}


exports.deleteById = (id) => {
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération de l'utilisateur courant
        const user = users[i];
        // Vérification si l'ID correspond
        if (user.id === id) {
            // Suppression de l'utilisateur de la liste
            users.splice(i, 1);
            // Sortie de la fonction
            return;
        }
    }
}


exports.resetScoreById = (id) => {
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération de l'utilisateur courant
        const user = users[i];
        // Vérification si l'ID correspond
        if (user.id === id) {
            // Réinitialisation du score de l'utilisateur
            user.score = 0;
            // Sortie de la fonction
            return;
        }
    }
}


exports.incrementScoreById = (id) => {
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération de l'utilisateur courant
        const user = users[i];
        // Vérification si l'ID correspond
        if (user.id === id) {
            // Incrémentation du score de l'utilisateur
            user.score++;
            // Sortie de la fonction
            return;
        }
    }
}


exports.decrementScoreById = (id) => {
    // Parcours de la liste des utilisateurs
    for (let i = 0; i < users.length; i++) {
        // Récupération de l'utilisateur courant
        const user = users[i];
        // Vérification si l'ID correspond 
        if (user.id === id) {
            // Décrémentation du score de l'utilisateur
            user.score--;
            // Sortie de la fonction
            return;
        }
    }
}