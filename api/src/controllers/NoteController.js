const Person = require('../models/Person');

module.exports = {
    async createNewNote(req, res){
        const { note } = req.body;
        const id = req.params.id;

        const person = await Person.findByIdAndUpdate(
            { _id: id },
            { $push: { notes: note } },
            { new: true }
        );

        return res.json(person);
    },
}