require('dotenv').config()

const config = {
    "app": {
        "port": process.env.PORT || 4000
    },
    "logger": {
        "level": "info"
    },
}

module.exports = config;
