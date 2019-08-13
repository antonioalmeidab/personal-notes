const Person = require('../models/Person');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
  async personList(req, res) {
    const people = await Person.find().sort({ name: 1 });
    return res.json(people);
  },

  async createNewPerson(req, res) {
    const { name, email, description } = req.body;
    const { filename: photo } = req.file;

    const [imageName] = photo.split('.');
    const fileName = `${imageName}.png`;

    await sharp(req.file.path)
      .resize(300, 300)
      .png({ quality: 60 })
      .toFile(
        path.resolve(req.file.destination, 'resized', fileName)
      )

    fs.unlinkSync(req.file.path);

    const person = await Person.create({
      name,
      email,
      description,
      photo: fileName,
    });

    return res.json(person);
  }
}