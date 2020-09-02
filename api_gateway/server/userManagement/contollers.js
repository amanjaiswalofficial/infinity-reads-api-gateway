const db = require('./models/index');
const User = db.user;
const Op = db.Sequelize.Op;


const controllers = {

    // Creates a new user
    createUser: async(req, res) => {
        try {

            const payload = {
                name: req.body.name,
                email: req.body.email,
                password: await User.hashPassword(req.body.password),
                image: req.body.image
            }

            const user = await User.create(payload);
            
            res.send(user);

        } catch (err) {
            res.status(400).send({
                message: err.message || "Some error occurred while creating the user."
            });
        }
    },

    // Finds all available users
    findAll: async(req, res) => {
        try {

            const users = await User.findAll();
            res.send(users);

        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all Users."
            });
        }
    },

    // Find a single user with given ID
    findOneUser: async(req, res) => {
        const id = req.params.id;
        
        try {
            
            const user = await User.findByPk(id)
            
            if (user === null || 
                user === undefined) {
                throw user
            }
            
            res.send(user)
            
        } catch (err) {
            res.status(500).send({
                message: `User with id: ${ id } doesn't exists.`
            });
        }
    },

    // Updates an existing user with given ID
    updateUser: async(req, res) => {
        const id = req.params.id;

        try {

            const payload = {
                name: req.body.name,
                email: req.body.email,
                password: await User.hashPassword(req.body.password),
                image: req.body.image
            }
            
            const user = await User.update(payload, { where: { id: id }});
            if (user == 1){
                res.send({message: "User updated successfully!"})
            } else {
                throw user
            }

        } catch (err) {
            res.status(500).send({
                message: err.message || 
                `Cannot update User with id: ${ id }. Make sure User exists or details provided are correct.`
            });
        }
    },

    // Deletes an existing user with given ID
    deleteUser: async(req, res) => {
        const id = req.params.id;

        try {

            const user = await User.destroy({ where: { id: id }});
            if (user == 1){
                res.send({message: "User deleted successfully!"})
            } else {
                throw user
            }
      
        } catch (err) {
            res.status(500).send({
                message: err.message || 
                `Cannot delete User with id: ${ id }. Make sure the User exists.`
            });
        }        
    },
}

module.exports = controllers;
