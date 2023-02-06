# dockerfile for example
# in this dockerfile we are building
# a container with nginx image and we
# set some parameters in it.
# from nginx image
FROM nginx

# creating a lable
LABEL app=nginx-example

# add maintainer
MAINTAINER amirhossein.najafizadeh21@gmail.com

# setting an argument
ARG HTML_DIR=static-html-directory

# setting one env variable
ENV APP="/usr/share/nginx/html"

# copy all files of html directory
COPY $HTML_DIR /usr/share/nginx/html

# run the echo command to see directory
RUN echo $HTML_DIR

# add a command for on build
ONBUILD RUN ls $APP

# expose port 80
EXPOSE 80/tcp