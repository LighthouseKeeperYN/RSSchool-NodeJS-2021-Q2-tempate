FROM node:14.17-alpine

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./
COPY nodemon.json ./
COPY . .

RUN npm install

EXPOSE 8088

CMD ["npm", "start"]
