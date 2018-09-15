const mongoose = require('mongoose');

const gundamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seires: String,
    weapon: String,
})

module.exports = mongoose.model('Gundams', gundamSchema)