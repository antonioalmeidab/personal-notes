const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://apiadmin:admin@cluster0-immme.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'photo_uploads', 'resized')));

app.use(require('./routes'));

app.listen(8000);