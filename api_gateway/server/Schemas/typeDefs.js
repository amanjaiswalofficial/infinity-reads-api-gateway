const { gql } = require('apollo-server-express');


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    blogs: [Blogs]
  }

  type Blogs {
    _id: ID,
    comments: [Comments],
    content: String,
    created_at: String,
    likes: [Likes],
    tags: [Tags],
    title: String,
    user_id: String
  }

  type Comments {
    id: ID,
    comments: String
  }

  type Likes {
    id: ID,
    likes: String
  }

  type Tags {
    id: ID,
    tags: String
  }
`;

module.exports = typeDefs;