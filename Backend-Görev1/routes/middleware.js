const Ogretmen = require('../models/Ogretmen');
const Ogrenci = require('../models/Ogrenci');
const Ders = require('../models/Ders');

async function getOgretmen(req, res, next) {
    try {
        const ogretmen = await Ogretmen.findById(req.params.id);
        if (!ogretmen) {
            return res.status(404).json({ message: 'Ogretmen not found' });
        }
        res.ogretmen = ogretmen;
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getOgrenci(req, res, next) {
    try {
        const ogrenci = await Ogrenci.findById(req.params.id)
        if (!ogrenci) {
            return res.status(404).json({ message: 'Ogrenci not found' });
        }
        res.ogrenci = ogrenci;
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getDers(req, res, next) {
    try {
        const ders = await Ders.findById(req.params.id);
        if (!ders) {
            return res.status(404).json({ message: 'Ders not found' });
        }
        res.ders = ders;
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getOgretmen, getOgrenci, getDers };
