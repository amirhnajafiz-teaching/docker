#!/usr/bin/env bash

# in this script we start our application container
docker build . -f build/app/Dockerfile -t amirhossein21/node-app:v0.1.0
docker run --network=node-app --name node-app-container -d -p 8080:8080 amirhossein21/node-app:v0.1.0
