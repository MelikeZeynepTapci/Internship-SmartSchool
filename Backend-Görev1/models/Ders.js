const mongoose = require('mongoose');

const  DersSchema = new mongoose.Schema({
    dersAdı: {
        type: String,
        required: true
    },
    ogretmen: {
        type: String,
        required: true
    },
    kontenjan: {
        type: Number,
        required: true
    }
});

exports = mongoose.model('Ders', DersSchema);