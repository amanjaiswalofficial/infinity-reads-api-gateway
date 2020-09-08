require('dotenv').config()

const config = {
    "app": {
        "port": process.env.PORT || 4000,
        "token": process.env.TOKEN_SECRET,
    },
    "logger": {
        "level": "info"
    },
}

module.exports = config;
