const Person = require('../models/Person');

module.exports = {
  async createNewNote(req, res) {
    const { notes } = req.body;
    const id = req.params.id;

    const person = await Person.findByIdAndUpdate(
      { _id: id },
      { $set: { notes: notes } },
      { new: true }
    );

    return res.json(person);
  },
}