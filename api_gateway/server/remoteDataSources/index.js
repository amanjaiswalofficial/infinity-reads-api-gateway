const config = require('config');
const { RESTDataSource } = require('apollo-datasource-rest');
const logger = require('../logger/index.js');


class BlogsAPI extends RESTDataSource {
    constructor() {
        super();
        // url for blogs microservice
        this.baseURL = config.get('services.blogs.url');
    }

    // This method throws an error if baseURL isn't correct
    didEncounterError(error) {
        logger.error(error)
        throw error;
    }

    // method to fetch all blogs from blogs microservice
    async getAllBlogs() {
        return this.get('blogs');
    }
}

module.exports = BlogsAPI;
