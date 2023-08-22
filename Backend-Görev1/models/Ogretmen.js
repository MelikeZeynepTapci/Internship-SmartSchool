const mongoose = require('mongoose');

const  OgretmenSchema = new mongoose.Schema({
    isim: { 
        type: String,
        required: true
    },
    soyisim: {
        type: String,
        required: true
    },

    ders: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Ogretmen', OgretmenSchema);