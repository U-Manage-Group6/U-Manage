// Pulling in the express framework
const express = require('express');
// Pulling CORS to relax securtiy applied to the API
let cors = require('cors');
const connection = require('./connection');
const userRoute= require('./routes/user')
const app = express();
// Used the method to recognize incoming Request Object as  JSON object
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user', userRoute);

module.exports = app;