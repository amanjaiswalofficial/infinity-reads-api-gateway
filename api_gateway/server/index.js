const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger/index.js');

// const BlogsAPI = require('./remoteDataSources/index.js');
const BlogsData = require('./testData.js');

// TODO: Remove typeDefs and resolvers from index.js

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    blogs: [Blogs]
  }

  type Blogs {
    title: String,
    content: String,
    author: String,
    image: String,
    postedBy: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    blogs: (obj, args, { BlogsData }, info) => {
      return BlogsData
    },
    // blogs: async (_source, _args, { dataSources }) => {
    //   return dataSources.BlogsAPI.getAllBlogs();
    // }
  },
};


/**
 * Express and Apollo configuration
 */

// Creating Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      BlogsData
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