const { gql } = require('apollo-server-express');


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    blog(_id: ID!): Response
    blogs: Response
  }

  type Mutation {
    postBlog(data: BlogInput): Response
    updateBlog(_id: ID, data: BlogInput): Response
    deleteBlog(_id: ID): Response
  }

  input BlogInput {
    title: String!,
    content: String
    user_id: String!
  }

  type Response {
    code: Int!,
    count: Int!,
    data: [Blog!],
    datetime: String,
    message: String,
    status: String!,
    timestamp: String,
  }

  type Blog {
    _id: ID!,
    title: String!,
    likes: [Likes],
    comments: [Comments],
    content: String,
    created_at: String,
    tags: [Tags],
    user_id: String!
  }

  type Comments {
    id: ID!,
    comments: String
  }

  type Likes {
    id: ID!,
    likes: Int
  }

  type Tags {
    id: ID!,
    tags: String
  }
`;

module.exports = typeDefs;
