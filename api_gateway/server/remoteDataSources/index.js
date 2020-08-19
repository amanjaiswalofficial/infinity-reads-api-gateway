const config = require('config');
const { RESTDataSource } = require('apollo-datasource-rest');
const logger = require('../logger/index.js')(module);


class BlogsAPI extends RESTDataSource {
    constructor() {
        super();
        // url for blogs microservice
        this.baseURL = config.get('services.blogs.url');
    }

    // This method throws an error if baseURL isn't correct
    didEncounterError(error) {
        const { response } = error.extensions
                
        logger.error(`{'url': '${response.url}', 'status': '${response.status}', 'statusText': '${response.statusText}'}`)

        throw error;
    }

    // method to fetch a single blog
    async getSingleBlog(blog_id) {
        return await this.get(`blog/${blog_id}`)
    }

    // method to fetch all blogs
    async getAllBlogs(params=null) {
        return await this.get('blogs/', params);
    }

    // method to post a new blog
    async postBlog(payload) {
        return await this.post(
            '/blog', 
            payload
        );
    }

    // method to update a blog
    async updateBlog(blog_id, payload) {
        return await this.put(
            `blog/${blog_id}`, 
            payload
        );
    }

    // method to delete a blog
    async deleteBlog(blog_id) {
        return await this.delete(`blog/${blog_id}`);
    }
}

module.exports = BlogsAPI;
