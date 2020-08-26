const resolvers = require('../../../../server/schemas/resolvers.js');
const { constructTestServer, blogsAPI } = require('../../../serverSetup.js');
const { GET_SINGLE_BLOG_RESPONSE_SUCCESS,
        GET_SINGLE_BLOG_RESPONSE_FAILURE } = require('../../../testData/blogsData.js');

const { server } = constructTestServer();

describe('Testing Blogs Resolvers Success', () => {

    beforeAll(async() => {   
        // mocking getSingleBlog()    
        blogsAPI.getSingleBlog = jest.fn(
            () => GET_SINGLE_BLOG_RESPONSE_SUCCESS
        );
    });

    it('tests sample query resolver', async(done) => {
        const result = resolvers.Query.hello();
        await expect(result).toEqual('Hello world!');
        
        done();
    });

    it('successfully fetches a single blog', async(done) => {
        const result = await resolvers.Query.blog(
            null,
            { id: '5f3ccf1d5248ee12f6979bee' },
            { dataSources: server.config.dataSources() },
            null  
        );

        expect(result.code).toBe(200);
        expect(result.status).toEqual('SUCCESS');
        expect(result.data[0].id).toEqual('5f3ccf1d5248ee12f6979bee');
        expect(result.data[0].title).toEqual('title 1');
       
        done();
    });
});

describe('Testing Blogs Resolvers Failure', () => {
    
    beforeAll(async() => {   
        // mocking getSingleBlog()    
        blogsAPI.getSingleBlog = jest.fn(
            () => GET_SINGLE_BLOG_RESPONSE_FAILURE
        );
    });

    it('fetches a single blog with wrong id', async(done) => {
        const result = await resolvers.Query.blog(
            null,
            { id: 'WRONG_ID' },
            { dataSources: server.config.dataSources() },
            null  
        );
        
        expect(result.code).toBe(400);
        expect(result.status).toEqual('FAILURE');
        expect(result.message).toEqual('Blog matching query does not exist.');
       
        done();
    });
});
