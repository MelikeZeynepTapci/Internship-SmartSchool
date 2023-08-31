const mongoose = require('mongoose');

const  OgrenciSchema = new mongoose.Schema({
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
    //dersler: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ders' }]
    ders: {
        type: String,
        required: true,
        ref: 'Ders'}
});

module.exports = mongoose.model('Ogrenci', OgrenciSchema);



