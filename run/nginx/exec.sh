#!/usr/bin/env bash

# in this script we start our nginx container
# docker build . -f build/nginx/Dockerfile -t amirhossein21/nginx:v0.1.0
docker build . -f build/nginx/Dockerfile --build-arg HTML_DIR=/build/nginx/html -t amirhossein21/nginx:v0.1.0
docker run -p 80:80 -d amirhossein21/nginx:v0.1.0
