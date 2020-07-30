const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger/index.js');

// TODO: Remove typeDefs and resolvers from index.js

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};


/**
 * Express and Apollo configuration
 */

// Creating Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Initializing express 
const app = express();

// Various routes 
app.use(bodyParser.json());
app.get('/health', (req, res) => res.json({status: 'ok'}))

server.applyMiddleware({
    app,
    path: '/graphql'
});

// Starting the server
app.listen({ port: 4000 }, () => 
    logger.info(`🚀 Server ready at http://localhost:4000`)
);

app.use((req, res) => {
    res.status(500);
    res.send('Something went wrong, please check again.');
});


module.exports = app;