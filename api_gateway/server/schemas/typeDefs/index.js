const { gql } = require('apollo-server-express');


const typeDefsBlogs = require('./typeDefsBlogs.js');
const typeDefsUsers = require('./typeDefsUsers.js');

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
