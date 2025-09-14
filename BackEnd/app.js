const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors());
app.use('/api', routes); // All API routes prefixed with /api

// Error handler (optional)
app.use(require('./middleware/errorHandler'));

module.exports = app;

// Creates the Express app (like defining your API logic).