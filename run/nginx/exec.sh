#!/usr/bin/env bash

# in this script we start our nginx container
docker build . -f build/nginx/Dockerfile -t amirhossein21/nginx:v0.1.0
docker run --build-arg HTML_DIR=/build/nginx/html -p 80:80 -d amirhossein21/nginx:v0.1.0