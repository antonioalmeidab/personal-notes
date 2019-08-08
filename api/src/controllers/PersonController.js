const Person = require('../models/Person');

module.exports = {
    async personList(req, res){
        const people = await Person.find().sort({name: 1});

        return res.json(people);
    },

    async createNewPerson(req, res){
        const { name, email, description } = req.body;
        const { filename: photo } = req.file;

        const person = await Person.create({
            name,
            email,
            description,
            photo
        });

        return res.json(person);
    }
}