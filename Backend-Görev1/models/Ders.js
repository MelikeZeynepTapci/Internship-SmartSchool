const mongoose = require('mongoose');

const  DersSchema = new mongoose.Schema({
    dersAdi: {
        type: String,
        required: true
    },
    ogretmenId: {
        type: Number,
        required: true,

    },
    kontenjan: {
        type: Number,
        required: true
    },
    derslik: {
        type: String,
        required: true
    },
    dersGunu: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ders', DersSchema);