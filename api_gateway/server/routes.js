const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const server = require('./apolloServer.js');
const userRoutes = require('./userManagement/routes.js');
const db = require('./userManagement/models/index.js');

/**
 * Express configuration
*/

// Initializing express and db
const app = express();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


var corsOptions = {
  // origin: "http://localhost:8081"
  origin: "*"
};


app.use(cors(corsOptions));

// parse requests of content-type -> application/json
app.use(bodyParser.json());

// parse requests of content-type -> application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }));


// Various Routes
app.get('/health', (req, res) => res.json({status: 'ok'}))
app.use('/user', userRoutes);

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
