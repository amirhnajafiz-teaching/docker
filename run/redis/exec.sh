#!/usr/bin/env bash

# in this script we are starting our redis container
docker run --network=node-app -v redisvolume:/data --name node-app-redis-cluster -d redis:latest