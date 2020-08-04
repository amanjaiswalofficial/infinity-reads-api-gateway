// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      // blogs: (obj, args, { blogsData }, info) => {
      //   return blogsData
      // },
      blogs: async (_source, _args, { dataSources }, info) => {
        return dataSources.BlogsAPI.getAllBlogs().then(
            (blog) => blog.data
          );
      }
    },
};

module.exports = resolvers;