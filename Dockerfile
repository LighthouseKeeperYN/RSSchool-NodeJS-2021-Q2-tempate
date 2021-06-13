FROM node:14.17-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY . .

RUN touch error.log \
  && touch request.log \
  && touch uncaughtException.log \
  && touch unhandledRejection.log

RUN npm install

EXPOSE 8088

CMD ["npm", "start"]
