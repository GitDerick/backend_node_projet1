// External imports
const express = require('express');

// Internal imports
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const meRoutes = require('./routes/me');
const usersRoutes = require('./routes/users');

// Variables
const app = express();
const PORT = 2000;

app.use(express.json());

// Routers
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);
app.use('/me', meRoutes);
app.use('/users', usersRoutes);


// Listener
app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`);
});

