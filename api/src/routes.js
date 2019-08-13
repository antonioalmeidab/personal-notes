const express = require('express');
const multer = require('multer')
const uploadConfig = require('./config/upload');
const PersonController = require('./controllers/PersonController');
const UserController = require('./controllers/UserController');
const NoteController = require('./controllers/NoteController');
const Authentication = require('./controllers/Authentication');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/people', PersonController.personList);
routes.post('/people', upload.single('photo'), PersonController.createNewPerson);
routes.put('/people/:id/addnote', upload.none(), NoteController.createNewNote);

routes.post('/users', upload.none(), UserController.createNewUser);
routes.get('/users', UserController.listUsers);
routes.put('/users/:id/passwordReset', upload.none(), UserController.passwordReset);

routes.post('/authentication', upload.none(), Authentication.authenticate);
routes.get('/authentication/:username/forgotPassword', Authentication.getSafeQuestion);

module.exports = routes;