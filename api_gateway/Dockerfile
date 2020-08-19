# NodeJs version
FROM node:12

# Creating app directory which will be the working directory in the image
WORKDIR /usr/infinity-reads/api_gateway/

# Copy and Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port for app to run
EXPOSE 4000

# Starting the server
CMD [ "npm", "run", "dev" ]
