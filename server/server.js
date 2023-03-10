const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');
const { handleError, convertToApiError } = require('./middleware/apiError')

// location of mongoDB
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
// CONNECTION TO MONGOOSE DB service
mongoose.connect(mongoUri);

// Middleware

// PARSING
app.use(bodyParser.json());
app.use(cookieParser());

// SANITIZE - TO SANITIZE EVERYTHING THAT GOES TO MONGO
app.use(xss());
app.use(mongoSanitize());

// routes middleware

app.use('/api', routes)

// error handling

app.use(convertToApiError);
app.use((err,req,res,next)=>{
    handleError(err,res)
})










const port = process.env.PORT || 3003;
app.listen(port);
