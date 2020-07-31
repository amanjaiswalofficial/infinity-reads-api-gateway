const { RESTDataSource } = require('apollo-datasource-rest');

class BlogsAPI extends RESTDataSource {
    constructor() {
        super();
        // this.baseURL = 'http://127.0.0.1:8000/';
    }

    async getAllBlogs() {
        // console.log(this.get('cars'))
        return this.get('cars');
    }
}

module.exports = BlogsAPI;