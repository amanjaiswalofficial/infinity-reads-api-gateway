// Authentication of JWT is done here

// TODO: Check functionality 
// when token comes from frontend
const config = require('config');

const jwt = require('jsonwebtoken');

const authenticateToken = (token, next) => {

    if (token == null) return "Please provide a valid token!"

    jwt.verify(
        token, 
        config.get('app.token'), 
        (err, user) => {
            console.log(err)
            if (err) return err.message
            console.log(user)
            next();
        }
    )
};


module.exports = authenticateToken;
