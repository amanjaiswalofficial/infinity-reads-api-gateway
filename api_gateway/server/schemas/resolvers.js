const generateResponse = require('./generateResponse.js');

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => 'Hello world!',

      blog: async ( _source, _args, { dataSources }, info ) => {
        try {
          
          const response = await dataSources.BlogsAPI.getSingleBlog(_args._id)
          return generateResponse(response)
        
        } 
        catch (err){
          throw err;
        }
      },

      blogs: async ( _source, _args, { dataSources }, info ) => { 
        try {
        
          const response = await dataSources.BlogsAPI.getAllBlogs()
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
        
      }
    },

    Mutation: {
      postBlog: async (_source, _args, { dataSources }, info) => {
        try {

          const payload = JSON.parse(JSON.stringify(_args.data))
          const response = await dataSources.BlogsAPI.postBlog(payload)
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
      },

      updateBlog: async (_source, _args, { dataSources }, info) => {
        try {
          
          const payload = JSON.parse(JSON.stringify(_args.data))
          const response = await dataSources.BlogsAPI.updateBlog(_args._id, payload)
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
      },

      deleteBlog: async (_source, _args, { dataSources }, info) => {
        try {
          
          const response = await dataSources.BlogsAPI.deleteBlog(_args._id)
          return generateResponse(response)
        
        }
        catch (err) {
          throw err;
        }
      }
    }
};

module.exports = resolvers;
