require('dotenv').config()

const config = {
    "app": {
        "port": process.env.PORT || 4000
    },
}

module.exports = config;