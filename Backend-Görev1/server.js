require('dotenv').config();

//Express
const express = require('express');
const app = express();

//Port
const port = 8080;

//MongoDB
const mongoose = require('mongoose');
//Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
//Error handling
db.on('error', console.error.bind(console, 'connection error:'));
//Database connection success
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());

//Routes
const okulSistemiRouter = require('./routes/OkulSistemi'); // localhost:8080/OkulSistemi

//Middleware
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
