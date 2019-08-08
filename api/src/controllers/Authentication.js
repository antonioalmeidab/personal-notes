const User = require('../models/User');

module.exports = {
    async authenticate(req, res) {
        const { candidateUser, candidatePassword } = req.body;
        
        await User.findOne({ 'username' : candidateUser }, function(err, user){
            try {
                if(err || candidatePassword != user.password) throw err;

                return res.status(200).send("Success");
            } catch(err) {
                return res.status(401).send("Invalid username or password!");
            }
        });
    },

    async getSafeQuestion(req, res) {
        const candidateUsername = req.params.username;

        await User.findOne({ 'username' : candidateUsername}, function(err, user){
            try {
                if (err) throw err;

                return res.json({ id: user.id, safeQuestion : user.safeQuestion });
                
            } catch(err) {
                return res.status(401).send("Invalid username!");
            }
        });
    }
}