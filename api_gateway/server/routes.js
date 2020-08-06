const express = require('express');
const bodyParser = require('body-parser');


const server = require('./apolloServer.js');

/**
 * Express configuration
 */

// Initializing express 
const app = express();

// Various routes 
app.use(bodyParser.json());
app.get('/health', (req, res) => res.json({status: 'ok'}))

server.applyMiddleware({
    app,
    path: '/graphql'
});

app.use((req, res) => {
  const error = new Error("Not Found");
  error.status = 404;
  res.status(error.status).send({
    error: {
      status: error.status,
      message: error.message
    },
  });
});

// Error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error"
    },
  });
});


module.exports = { app, server };
