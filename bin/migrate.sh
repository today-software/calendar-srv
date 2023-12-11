#! /usr/bin/env bash

mkdir -p ../db/migrations

# Run the migrations
if [ "$(ls ../db/migrations)"]; then 
    if [ -z "${NODE_ENV}" == "development" ]; then
        dbmate up
    else 
        dbmate migrate
    fi
fi