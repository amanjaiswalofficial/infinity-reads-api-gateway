const { ApolloServer } = require('apollo-server-express');


const BlogsAPI = require('./remoteDataSources/index.js');
const typeDefs = require('./schemas/typeDefs.js');
const resolvers = require('./schemas/resolvers.js');


// Creating Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    dataSources: () => {
      return {
        BlogsAPI: new BlogsAPI()
      }
    },
    context: () => {

    }
});

module.exports = server;
