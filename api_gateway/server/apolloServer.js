const { ApolloServer } = require('apollo-server-express');

const BlogsAPI = require('./remoteDataSources/index.js');
const typeDefs = require('./schemas/typeDefs/index.js');

const blogResolvers = require('./schemas/resolvers/blogResolvers.js');
const userResolvers = require('./schemas/resolvers/userResolvers.js');

const db = require('./userManagement/models/index.js');


// Creating Apollo Server
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: [
      blogResolvers, 
      userResolvers
    ],
    playground: true,
    dataSources: () => {
      return {
        BlogsAPI: new BlogsAPI()
      }
    },
    context: {
      db
    }
});

module.exports = server;
