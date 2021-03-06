const express = require('express');

const app = express();

// ============================
// Import the routes
// ============================

app.use(require('./product'));
app.use(require('./upload'));
app.use(require('./images'));

module.exports = app;
