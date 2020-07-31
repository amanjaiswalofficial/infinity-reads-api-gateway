// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      blogs: (obj, args, { blogsData }, info) => {
        return blogsData
      },
      // blogs: async (_source, _args, { dataSources }) => {
      //   return dataSources.BlogsAPI.getAllBlogs();
      // }
    },
};

module.exports = resolvers;