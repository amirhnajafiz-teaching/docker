# dockerfile for our node.js application
# setting up our express app into a docker container.
# using node image so we have npm installed on our
# operatig sytem.
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# set environment variables
ENV HTTP_PORT=8080
ENV REDIS_URL=redis://node-app-redis-cluster:6379

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./app/package*.json ./

# Run npm i to create node_modules directory.
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./app .

# cmd allows us to execute the node app starting command
CMD [ "node", "index.js" ]
