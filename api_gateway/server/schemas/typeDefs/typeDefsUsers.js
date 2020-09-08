const { gql } = require('apollo-server-express');


// Construct a schema, using GraphQL schema language
const typeDefsUsers = gql`

    extend type Query {
        user(id: ID!): Response,
    }

    extend type Mutation {
        newUser(data: UserInput): Response,
        existingUser(data: UserInput): Response,
    }

    input UserInput {
        firstName: String,
        lastName: String,
        emailId: String!,
        password: String!
    }

    extend type Response {
        userData: Payload,
    }

    extend type Payload {
        user: User,
        token: String
    }

    type User {
        id: ID!,
        firstName: String,
        lastName: String,
        email: String!,
        password: String!,
    }

`;

module.exports = typeDefsUsers;
