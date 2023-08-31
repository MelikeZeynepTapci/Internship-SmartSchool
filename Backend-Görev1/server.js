require('dotenv').config();
const okulSistemiRoutes = require('./routes/OkulSistemi.js');

//Express
const express = require('express');
const app = express();

//Port
const port = 8080;
// MongoDB
const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

connectToDatabase();


app.use(express.json());

//Routes
app.use('/OkulSistemi', okulSistemiRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;