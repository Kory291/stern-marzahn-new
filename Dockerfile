FROM node:16.18.1-slim as build

COPY . /app
WORKDIR /app/docs
RUN npm install yarn && yarn install && yarn docs:build

FROM httpd:2.4
COPY --from=build /app/build /usr/local/apache2/htdocs/