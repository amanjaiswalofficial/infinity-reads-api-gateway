const { gql } = require('apollo-server-express');


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    blog(id: ID!): Response,
    blogs(
      search: String, 
      sort: String, 
      tags: String,
      start: Int,
      limit: Int): Response,
    tags: Response
  }

  type Mutation {
    postBlog(data: BlogInput): Response,
    updateBlog(id: ID, data: BlogInput): Response,
    deleteBlog(id: ID): Response
  }

  input BlogInput {
    title: String,
    content: String,
    user_id: String!,,
    tags: [String]
  }

  type Response {
    code: Int!,
    count: Int,
    data: Payload!,
    datetime: String,
    message: String,
    status: String!,
    timestamp: String,
  }

  type Payload {
    blogs: [Blog],
    tags: [String],
    total_count: Int,
  }

  type Blog {
    id: ID,
    title: String,
    likes: [Likes],
    comments: [Comments],
    content: String,
    created_at: String,
    tags: [String],
    user_id: String
  }

  type Comments {
    id: ID!,
    comments: String
  }

  type Likes {
    id: ID!,
    likes: Int
  }
`;

module.exports = typeDefs;
