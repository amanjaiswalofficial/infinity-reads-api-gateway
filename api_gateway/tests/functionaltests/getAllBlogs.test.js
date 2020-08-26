const { createTestClient } = require('apollo-server-testing');
const { constructTestServer, blogsAPI } = require('../serverSetup.js');

const { GET_ALL_BLOGS_RESPONSE_SUCCESS } = require('../testData/blogsData.js');
const { GET_ALL_BLOGS_QUERY } = require('../testQueries/blogQueries.js');


describe('Testing Queries', () => {
    const { server } = constructTestServer();

    beforeAll(async() => {      
        // mocking getAllBlogs()
        blogsAPI.getAllBlogs = jest.fn(
            () => GET_ALL_BLOGS_RESPONSE_SUCCESS
        );

    });

    it('fetches all the blogs', async(done) => {
        const { query } = createTestClient(server);
        const result = await query({query: GET_ALL_BLOGS_QUERY})

        expect(result.data.blogs.data[0].id).toEqual('5f3ccf1d5248ee12f6979bee');
        expect(result.data.blogs.data[1].title).toEqual('title 2');
        
        done();
    })
});
