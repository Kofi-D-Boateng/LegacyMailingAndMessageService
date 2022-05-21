FROM node:16.6-alpine

WORKDIR /lb-notifcations

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]