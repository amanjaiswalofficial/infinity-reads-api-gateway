const config = require('config');
const { RESTDataSource } = require('apollo-datasource-rest');


class BlogsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.get('services.blogs.url');
    }

    async getAllBlogs() {
        return this.get('blogs');
    }
}

module.exports = BlogsAPI;