# INFINITY-READS-API-GATEWAY
API Gateway for Infinity Reads. This service uses GraphQL and Apollo Server with backend written in NodeJs and Express.

## Getting Started
 **Steps to get started**
 

* Clone the repository 
 ```
 git clone git@github.com:amanjaiswalofficial/infinity-reads-api-gateway.git`
 ```
* Change working directory
 ```
 cd api_gateway
 ``` 

* Install the dependency 
```
npm install or npm i
```

* Set the NODE_ENV
```
export NODE_ENV = 'development'
```

* Start development server
```
npm run dev
```

- Output 
```
Server ready at http://0.0.0.0:4000/
```

## Testing
 **We've used ```Jest``` and ```supertest``` for testing.**
 
 * To run the tests:
 ```
 npm run test
 ```  

## Logger
 **We've used ```winston``` logger for logging. Logs are displayed on the console and are managed in the file under logs directory.**
 * To use the logger:
 ```
const logger = require('.path/to/logger/index.js')(module);
 ```
 Here, we have used a small wrapper around the winston while importing it to pass the filename while maintaining logs.

 ## Dockerization
  * To run via Docker:
  ```
  docker-compose up -d
  ```
  * To shut down the docker-compose container:
  ```
  docker-compose down
  ```