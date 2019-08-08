const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://apiadmin:admin@cluster0-immme.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.use(require('./routes'));

app.listen(8000);