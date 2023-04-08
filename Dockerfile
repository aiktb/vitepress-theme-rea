# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN apk add git && git pull
RUN npm install && npm run docs:build
CMD npm run docs:preview
