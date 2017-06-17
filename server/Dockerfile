FROM node:8.0

MAINTAINER V

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN npm install knex -g
