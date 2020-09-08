const { ApolloServer } = require('apollo-server-express');

const BlogsAPI = require('../server/remoteDataSources/index.js');
const typeDefsBlogs = require('../server/schemas/typeDefsBlogs.js');
const resolvers = require('../server/schemas/resolvers.js');

// Instantiating BlogsAPI
const blogsAPI = new BlogsAPI();

// Constructing the test server
const constructTestServer = () => {
  const server = new ApolloServer({
    typeDefs: [typeDefsBlogs],
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
