FROM node:16.2.0-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
CMD [ "node", "index.js" ]