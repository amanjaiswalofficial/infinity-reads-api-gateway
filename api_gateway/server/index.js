const config = require('config');
const logger = require('./logger/index.js')(module);


const { app } = require('./routes.js');

// Starting the server
logger.info("NODE_ENV: " + config.util.getEnv('NODE_ENV'));

app.listen({ port: config.get('app.port') }, () => 
    logger.info(`🚀 Server ready at http://localhost:${config.get('app.port')}`)
);


module.exports = app;
