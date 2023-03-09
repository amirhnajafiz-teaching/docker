<h1 align="center">
    Docker
</h1>

<br />

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
