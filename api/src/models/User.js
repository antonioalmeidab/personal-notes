const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    safeQuestion: String,
    safeAnswer: String
});

module.exports = mongoose.model ('User', userSchema);