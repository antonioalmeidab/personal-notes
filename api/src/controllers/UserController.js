const User = require('../models/User');
// const bcrypt = require('bcrypt');

module.exports = {
    async listUsers(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async createNewUser(req, res) {
        const { username, password, passwordTip } = req.body;
    
        const user = await User.create({
            username,
            password,
            passwordTip
        });

        return res.json(user);
    },

    async passwordReset(req, res) {
        const id = req.params.id;
        const { newPassword, candidateAnswer } = req.body;

        let user = await User.findById(id);

        if (user.safeAnswer != candidateAnswer) return res.status(401).send("Wrong answer!");

        else user = await User.findByIdAndUpdate(
            { _id: id},
            { $set: { password: newPassword } },
            { new: true}
        );
        
        return res.status(200).send("Password reset!");
    }
}