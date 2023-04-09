# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN apk add git && git pull
RUN npm install && npm run docs:build
HEALTHCHECK --interval=24h --timeout=12s --start-period=30s \
    CMD ./health-check.sh
CMD ./start.sh
