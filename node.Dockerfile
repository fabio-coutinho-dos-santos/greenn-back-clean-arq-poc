FROM node:18.19.1

WORKDIR /home

RUN npm install -g @nestjs/cli

COPY package*.json ./

COPY . .
