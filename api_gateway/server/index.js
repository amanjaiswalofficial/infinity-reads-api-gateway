const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger/index.js');

// const BlogsAPI = require('./remoteDataSources/index.js');
const typeDefs = require('./Schemas/typeDefs.js');
const resolvers = require('./Schemas/resolvers.js');
const blogsData = require('./Schemas/testData.js');

 
/**
 * Express and Apollo configuration
 */

// Creating Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      blogsData
    },
    playground: true
    // dataSources: () => {
    //   return {
    //     BlogsAPI: new BlogsAPI()
    //   }
    // }
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