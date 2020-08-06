const { data } = require("../logger");

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      blogs: async (_source, _args, { dataSources }, info) => {
        blog =  await dataSources.BlogsAPI.getAllBlogs()
        return await blog.data
      }
    },
};

module.exports = resolvers;
