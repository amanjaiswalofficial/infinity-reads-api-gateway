// JWT is created here whenever 
// required which expires in 7 days

const config = require('config');

const jwt = require('jsonwebtoken');


const generateAccessToken = (token_data) => {
    return jwt.sign(
        {token_data},
        config.get('app.token'),
        {
            expiresIn: "7d"
        } 
    );
}

module.exports = generateAccessToken;
