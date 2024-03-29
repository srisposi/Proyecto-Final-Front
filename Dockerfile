# pull the official base image
FROM node:14-alpine AS build
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
# add app
COPY . ./
# start app
CMD ["npm", "start"]