const mongoose = require('mongoose');

const  OgrenciSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Ogrenci', OgrenciSchema);



