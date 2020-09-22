// This file contains the sample data for the all the Blogs API's

const GET_ALL_BLOGS_RESPONSE_SUCCESS = {
    "code": 200,
    "data": {
        blogs: [
            {
                "content": "content",
                "created_at": "2020-08-19T12:35:01.870000",
                "id": "5f3ccf1d5248ee12f6979bee",
                "tags": [],
                "title": "title 1",
                "updated_at": "2020-08-19T12:35:01.870000",
                "user_id": "234567890"
            },
            {
                "content": "content2",
                "created_at": "2020-08-19T12:35:01.870000",
                "id": "5f3ccf1d5248ee12f6979bef",
                "tags": [],
                "title": "title 2",
                "updated_at": "2020-08-19T12:35:01.870000",
                "user_id": "234567890"
            }
        ]
    },
    "datetime": "2020-08-19T16:15:04",
    "errors": null,
    "message": null,
    "program": "blog_app",
    "status": "SUCCESS",
    "timestamp": 1597833904.9309843,
    "version": "1.0"
}

const GET_SINGLE_BLOG_RESPONSE_SUCCESS = {
    "code": 200,
    "data": {
        blogs:[
            {
                "content": "content",
                "created_at": "2020-08-19T12:35:01.870000",
                "id": "5f3ccf1d5248ee12f6979bee",
                "tags": [],
                "title": "title 1",
                "updated_at": "2020-08-19T12:35:01.870000",
                "user_id": "234567890"
            },
        ]
    },
    "datetime": "2020-08-19T16:15:04",
    "errors": null,
    "message": null,
    "program": "blog_app",
    "status": "SUCCESS",
    "timestamp": 1597833904.9309843,
    "version": "1.0"
}

const GET_SINGLE_BLOG_RESPONSE_FAILURE = {
    "code": 400,
    "data": null,
    "datetime": "2020-08-25T13:14:12",
    "errors": null,
    "message": "Blog matching query does not exist.",
    "program": "blog_app",
    "status": "FAILURE",
    "timestamp": 1598341452.7316062,
    "version": "1.0"
    }


module.exports = { 
    GET_ALL_BLOGS_RESPONSE_SUCCESS, 
    GET_SINGLE_BLOG_RESPONSE_SUCCESS,
    GET_SINGLE_BLOG_RESPONSE_FAILURE 
};
