const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

// location of mongoDB
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
// CONNECTION TO MONGOOSE DB service
mongoose.connect(mongoUri);

// Middleware

// PARSING
app.use(bodyParser.json());

// SANITIZE - TO SANITIZE EVERYTHING THAT GOES TO MONGO
app.use(xss());
app.use(mongoSanitize());







const port = process.env.PORT || 3003;
app.listen(port);
