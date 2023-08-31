const express = require('express');
const router = express.Router();

const { getOgretmen, getOgrenci, getDers } = require('./middleware'); 

const Ogretmen = require('../models/Ogretmen');
const Ogrenci = require('../models/Ogrenci');
const Ders = require('../models/Ders');


// Getting all: 

router.get('/allData', async (req, res) => {
    try {
        const ogretmenList = await Ogretmen.find();
        const ogrenciList = await Ogrenci.find();
        const dersList = await Ders.find();
        
        const allData = {
            ogretmen: ogretmenList,
            ogrenci: ogrenciList,
            ders: dersList
        };
        
        res.json(allData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); 

//Welcome Script:
router.get('/', async (req, res) => {    
    try {
        res.send("Welcome to API")
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting ALL Ogretmen:
router.get('/ogretmen', async (req, res) => {    
    try {
        const ogretmenList = await Ogretmen.find();
        res.json(ogretmenList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting ONE Ogretmen by ID:,

router.get('/ogretmen/:id', getOgretmen, (req, res) => {
    res.json(res.ogretmen);
});

//Post Ogretmen: 
router.post('/ogretmen', async (req, res) => {
    const ogretmen = new Ogretmen({
        id: req.body.id,
        isim: req.body.isim,
        soyisim: req.body.soyisim,
        ders: req.body.ders
    });
    
    try {
        const newOgretmen = await ogretmen.save();
        res.status(201).json(newOgretmen);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update Ogretmen by ID:
router.patch('/:id', (req, res) => {
    res.send(req.params.id);
});

// Delete Ogretmen by ID:
router.delete('/:id', (req, res) => {
    res.send(req.params.id);
});

// Getting ALL Ogrenci:

/* router.get('/ogrenci', async (req, res) => {    
    try {
        const ogrenciList = await Ogrenci.find();
        res.json(ogrenciList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); */

router.get("/ogrenci", async (req, res) => {
    try {
        let ogrenciList; 
        ogrenciList = await Ogrenci.find({ isim: req.query.isim });
        if (!req.query.isim) {
            ogrenciList = await Ogrenci.find();
        }
        res.json(ogrenciList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting ONE Ogrenci by ID:,

router.get('/ogrenci/:id', getOgrenci, (req, res) => {
    res.json(res.ogrenci);
    //Test (print the name of the ogrenci):
    console.log(res.ogrenci.isim);
});

// Post Ogrenci: 
router.post('/ogrenci', async (req, res) => {
    const ogrenci = new Ogrenci({
        id: req.body.id,
        isim: req.body.isim,
        soyisim: req.body.soyisim,
        ders: req.body.ders
    });

 
    try {
        const newOgrenci = await ogrenci.save();
        res.status(201).json(newOgrenci);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update Ogrenci by ID:
router.patch('/:id', (req, res) => {
    res.send(req.params.id);
});


// Get ALL Ders:
    router.get('/ders', async (req, res) => {
        try {
            const dersList = await Ders.find();
            res.json(dersList);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

// Get ONE Ders by ID:
    router.get('/ders/:id', getDers, (req, res) => {
        res.json(res.ders);
    });

// Post Ders:

    router.post('/ders', async (req, res) => {
        const ders = new Ders({
            dersAdi: req.body.dersAdi,
            ogretmenId: req.body.ogretmenId,
            kontenjan: req.body.kontenjan,
            derslik: req.body.derslik,
            dersGunu: req.body.dersGunu
        });

        try {
            const newDers = await ders.save();
            res.status(201).json(newDers);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }); 

    module.exports = router;













