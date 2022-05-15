FROM node:16.6-alpine

WORKDIR /usr/lb-notifcations

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]