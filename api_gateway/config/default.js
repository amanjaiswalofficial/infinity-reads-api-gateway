require('dotenv').config()

const config = {
    "app": {
        "port": process.env.PORT || 4000,
        "token": process.env.TOKEN_SECRET,
    },
    "services": {
        "blogs": {
            "url": process.env.MICROSERVICE_BLOGS,
        }
    },
    "logger": {
        "level": "debug"
    },
}
 
module.exports = config;
