// 1. Import Express
// 2. Create the app
// 3. Create one GET route for '/'
// 4. Export the app

const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Home');
});

module.exports = app;