const express = require('express');
const router = express.Router();

const Ogretmen = require('../models/Ogretmen');
const Ogrenci = require('../models/Ogrenci');
const Ders = require('../models/Ders');

router.get("/", async (req, res) => {
    try {
        const ogretmen = await Ogretmen.find();
        res.json(ogretmen);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//GET, POST, PATCH, DELETE
    
// Getting all
router.get('/', (req, res) => {
    res.send('Hello World!');
});

//Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

// Creating one
router.post('/', (req, res) => {
    res.send(req.body);
});

// Updating one
router.patch('/:id', (req, res) => {
    res.send(req.params.id);
});

// Deleting one
router.delete('/:id', (req, res) => {
    res.send(req.params.id);
});


module.exports = router;
