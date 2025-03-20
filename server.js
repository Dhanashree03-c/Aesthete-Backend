const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const routes = require('./routes'); // Import routes
app.use('/', routes);

module.exports = app; // Export the app for serverless deployment
