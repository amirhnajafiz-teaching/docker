# Docker

<img src="https://img.shields.io/github/languages/top/amirhossein-teaching/docker?style=flat-square" />
<img src="https://img.shields.io/github/v/release/amirhossein-teaching/docker?style=flat-square" />

Welcome to **Docker** practicual example. In this repository we are going to build containers with **Docker**. Next we are going to make communications
between our containers using **Docker Network**, and
we are going to bind our local file system to container
file system using **Docker Volumes**.

<br />

## Nginx Container

First we are going to build a simple nginx image and
customizing the html page.

```Dockerfile
FROM nginx

# creating a lable
LABEL app=nginx-example

# add maintainer
MAINTAINER amirhossein.najafizadeh21@gmail.com

# setting an argument
ARG HTML_DIR=html

# setting one env variable
ENV APP="cloud computing docker presentation"

# copy all files of html directory
COPY $HTML_DIR /usr/share/nginx/html

# run the echo command to see directory
RUN echo $HTML_DIR

# run another command
RUN export $APP

# add a command for on build
ONBUILD RUN ls /usr/share/nginx/html

# expose port 80
EXPOSE 80/tcp
```

As you can see, we are chaning the ```/usr/share/nginx/html``` files.

So let's build our container and start the container.

```shell
docker build . -f build/nginx/Dockerfile --build-arg HTML_DIR=/build/nginx/html -t amirhossein21/nginx:v0.1.0
docker run -p 80:80 -d amirhossein21/nginx:v0.1.0
```

Now make a curl to ```localhost:8080```.

## Node App

In the next example we are going to deploy a full **Node.js** application with **Redis** database on **Docker**.

First we need to build our network and volume:

#### Network

```shell
docker network create node-app
```

#### Volume

```shell
docker volume create redisvolume
```

Now let's start **Redis** cluster in **node-app** network, binded to ```redisvolume```.

```shell
docker run --network=node-app -v redisvolume:/data --name node-app-redis-cluster -d redis:latest
```

Now that we have Redis cluster up and running, we are
going to deploy our node app.

First we are going to write a Dockerfile.

```Dockerfile
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
```

Pay attention to the redis cluster address:

```Dockerfile
ENV REDIS_URL=redis://node-app-redis-cluster:6379
```

Since our node app container and redis cluster are in
one network, we can use the redis container name insted of host ip.

#### Build

```shell
docker build . -f build/app/Dockerfile -t amirhossein21/node-app:v0.1.0
```

#### Run

```shell
docker run --network=node-app --name node-app-container -d -p 8080:8080 amirhossein21/node-app:v0.1.0
```

Now make the following http requests:

```shell
curl -X POST "localhost:8080/api?key=amir&value=hossein"
curl -X GET "localhost:8080/api?key=amir"
```
