// Authentication of JWT is done here
const config = require('config');

const jwt = require('jsonwebtoken');


const authenticateToken = async (token) => {

    // Throws error msg if token is null
    try {
        if (token == null) {
            throw "Do not provide empty token!"
        }      
    } catch (err) {
        throw await err
    }
    

    // Returns token data if token is valid 
    // otherwise throws an error
    return jwt.verify(
        token, 
        config.get('app.token'), 
        async (err, data) => {

            try {
                if (err) throw err;
                
            } catch (err) {
                throw err.message
            }
            
            return await data;
        }
    );
};


module.exports = authenticateToken;
