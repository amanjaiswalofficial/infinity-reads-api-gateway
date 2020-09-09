const { ApolloServer } = require('apollo-server-express');

const BlogsAPI = require('../server/remoteDataSources/index.js');
const typeDefs = require('../server/schemas/typeDefs/index.js');
const blogResolvers = require('../server/schemas/resolvers/blogResolvers');

// Instantiating BlogsAPI
const blogsAPI = new BlogsAPI();

// Constructing the test server
const constructTestServer = () => {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: [
      blogResolvers
    ],
    dataSources: () => {
        return {
          BlogsAPI: blogsAPI
        }
    },
  });
  return { server };
};

module.exports = { constructTestServer, blogsAPI };
