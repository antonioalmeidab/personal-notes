const mongoose = require('mongoose');

const personSchema = new mongoose.Schema ({
    name: String,
    email: String,
    description: String,
    notes: [String],
    photo: String,
});

module.exports = mongoose.model('Person', personSchema);