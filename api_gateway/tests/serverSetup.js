const { ApolloServer } = require('apollo-server-express');

const BlogsAPI = require('../server/remoteDataSources/index.js');
const typeDefs = require('../server/schemas/typeDefs.js');
const resolvers = require('../server/schemas/resolvers.js');

// Instantiating BlogsAPI
const blogsAPI = new BlogsAPI();

// Constructing the test server
const constructTestServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
          BlogsAPI: blogsAPI
        }
    },
  });
  return { server };
};

module.exports = { constructTestServer, blogsAPI };
