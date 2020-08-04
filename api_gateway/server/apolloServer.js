const { ApolloServer } = require('apollo-server-express');


const BlogsAPI = require('./remoteDataSources/index.js');
const typeDefs = require('./Schemas/typeDefs.js');
const resolvers = require('./Schemas/resolvers.js');


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
    context: {
      BlogsAPI
    }
});

module.exports = server;