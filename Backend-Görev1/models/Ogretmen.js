const mongoose = require('mongoose');

const  OgretmenSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },

    isim: { 
        type: String,
        required: true
    },
    soyisim: {
        type: String,
        required: true
    },

    ders: {
        type: String,
        required: true,
        ref: 'Ders'
    }
});


module.exports = mongoose.model('Ogretmen', OgretmenSchema);