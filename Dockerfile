# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /rea
COPY . .
RUN apk add git
RUN git pull
RUN npm install
RUN npm run docs:build
CMD npm run docs:preview
