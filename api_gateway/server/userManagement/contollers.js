// Controllers for various operations on user management
const generateUserResponse = require('../utils/generateUserResponse');
const generateAccessToken = require('../utils/createJwtToken');


const controllers = {

    // Creates a new user
    createUser: async(db, args) => {
        try {

            const payload = {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.emailId,
                password: await db.hashPassword(args.password),
                image: args.image || null
            }
            
            await db.create(payload);
            
            return generateUserResponse(
                null, 
                200,
                "User created successfully");

        } catch (err) {
            return generateUserResponse(
                null, 
                400, 
                err.message || "Error while creating a new user!"
            );
        }
    },

    // Find a single user with given ID
    findOneUser: async(db, id) => {        
        try {
            
            const user = await db.findByPk(id)
            
            if (!user) {
                throw `User with id ${id} not found!`
            }
            
            const payload = await user.toJSON(); 
            
            return generateUserResponse(payload, 200);
            
        } catch (err) {
            return generateUserResponse(null, 400, err);
        }
    },

    // Authenticate user
    authenticateUser: async(db, args) => {
        try {
            
            const payload = {
                email: args.emailId,
                password: args.password
            }

            // Finding if user exists or not
            const user = await db.findOne({
                where: {
                    email: payload.email,
                }
            })

            if (!user) {
                throw user
            } 
            
            // Validating the password
            const isValid = await db.validPassword(payload.password, user.password);
            
            if (!isValid) {
                throw "Invalid Password"
            }

            // Creating a JWT access token
            const jwtToken = generateAccessToken(user.id);

            return generateUserResponse(
                {token: jwtToken}, 
                200,
                "Login Successfull!"
            )


        } catch (err) {
            return generateUserResponse(
                null, 
                400,
                err || "User not found!" )
        }
    }

    // // Updates an existing user with given ID
    // updateUser: async(req, res) => {
    //     const id = req.params.id;

    //     try {

    //         const payload = {
    //             firstName: req.body.firstName,
    //             lastName: req.body.lastName,
    //             email: req.body.email,
    //             password: await User.hashPassword(req.body.password),
    //             image: req.body.image
    //         }
            
    //         const user = await User.update(payload, { where: { id: id }});
    //         if (user == 1){
    //             res.send({message: "User updated successfully!"})
    //         } else {
    //             throw user
    //         }

    //     } catch (err) {
    //         res.status(500).send({
    //             message: err.message || 
    //             `Cannot update User with id: ${ id }. Make sure User exists or details provided are correct.`
    //         });
    //     }
    // },

    // // Deletes an existing user with given ID
    // deleteUser: async(req, res) => {
    //     const id = req.params.id;

    //     try {

    //         const user = await User.destroy({ where: { id: id }});
    //         if (user == 1){
    //             res.send({message: "User deleted successfully!"})
    //         } else {
    //             throw user
    //         }
      
    //     } catch (err) {
    //         res.status(500).send({
    //             message: err.message || 
    //             `Cannot delete User with id: ${ id }. Make sure the User exists.`
    //         });
    //     }        
    // },
}

module.exports = controllers;
