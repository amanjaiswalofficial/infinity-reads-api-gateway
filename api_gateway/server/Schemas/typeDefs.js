const { gql } = require('apollo-server-express');


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    blogs: [Blogs]
  }

  type Blogs {
    title: String,
    content: String,
    author: String,
    image: String,
    postedBy: String
  }
`;

module.exports = typeDefs;