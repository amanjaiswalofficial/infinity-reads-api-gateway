// This file contains the queries for the all the Blogs API's
const { gql } = require('apollo-server-express');


const GET_ALL_BLOGS_QUERY = gql`
query {
    blogs{
        data{
            blogs{
                id
                title
                content
                comments{
                    id
                }
                created_at
                likes {
                    id
                }
                user_id
                }
            }
        status
        code
    }
}
`;

module.exports = { GET_ALL_BLOGS_QUERY };
