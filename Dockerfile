FROM node:14

RUN mkdir -p /usr/src/app
# ENV PORT 8000

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . /usr/src/app

# RUN yarn build

# EXPOSE 8000
CMD [ "yarn", "dev", "-p", "8000" ]