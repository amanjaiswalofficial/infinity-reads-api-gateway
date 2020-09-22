// Main TypeDef file

const { gql } = require('apollo-server-express');


const typeDefsBlogs = require('./typeDefsBlogs.js');
const typeDefsUsers = require('./typeDefsUsers.js');


// These typeDefs can be used anywhere by using 
// the 'extend' keyword (you can have a look at typeDefsUsers.js)
// for more info. The only restriction is that you can't use the 
// same key under a specific type in different typeDefs. 

// For eg:
// If you're using key 'data' under Response type in typeDefsBlogs.js,
// then you can't use the same key in typeDefsUsers.js under Response type.

// Also, you have to declare the various typeDefs using '${typeDefs}' notation.
const typeDefs = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    type Response {
        code: Int!,
        count: Int,
        datetime: String,
        message: String,
        status: String!,
        timestamp: String,
    }

    type Payload {
        _empty: String
    }
    ${typeDefsUsers}
    ${typeDefsBlogs}
`;


module.exports = typeDefs;
