# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN apk add git
RUN git pull

RUN npm install
RUN npm run docs:build
HEALTHCHECK --interval=30s --timeout=12s --start-period=30s CMD ["/bin/sh", "/app/health-check.sh"]
CMD ["/bin/sh", "/app/start.sh"]
