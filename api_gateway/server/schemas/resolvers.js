const generateResponse = require('../utils/generateResponse.js');
const requestParams = require('../utils/requestParams.js');


// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      // Sample query resolver
      hello: () => 'Hello world!',

      // Resolver for fetching a single blog
      blog: async ( _source, _args, { dataSources }, info ) => {
        try {
          
          const response = await dataSources.BlogsAPI.getSingleBlog(_args.id);
          return generateResponse(response)
        
        } 
        catch (err){
          throw err;
        }
      },

      // Resolver for fetching multiple blogs
      blogs: async ( _source, _args, { dataSources }, info ) => { 
        try {
          
          const params = requestParams(_args);
          const response = await dataSources.BlogsAPI.getAllBlogs(params);
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
      },

      // Resolver for fetching the filters
      tags: async ( _source, _args, { dataSources }, info ) => {
        try {
          const response = await dataSources.BlogsAPI.fetchFilters();
          return generateResponse(response)
        } 
        catch (err) {
          throw err;
        }
      }
    },

    Mutation: {
      // Mutation for posting a new blog
      postBlog: async (_source, _args, { dataSources }, info) => {
        try {

          const payload = JSON.parse(JSON.stringify(_args.data));
          const response = await dataSources.BlogsAPI.postBlog(payload);
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
      },

      // Mutation for updating an existing blog
      updateBlog: async (_source, _args, { dataSources }, info) => {
        try {
          
          const payload = JSON.parse(JSON.stringify(_args.data));
          const response = await dataSources.BlogsAPI.updateBlog(_args.id, payload);
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
      },

      // Mutation for deleting an existing blog
      deleteBlog: async (_source, _args, { dataSources }, info) => {
        try {
          
          const response = await dataSources.BlogsAPI.deleteBlog(_args.id);
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
      }
    }
};

module.exports = resolvers;
