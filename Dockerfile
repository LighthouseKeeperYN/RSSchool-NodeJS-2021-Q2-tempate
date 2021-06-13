FROM node:14.17-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
COPY . .
RUN npm install && npm run build
EXPOSE 8088
# RUN npm start
# CMD ["node", "./dist/server.js"]
CMD ["npm", "start"]
