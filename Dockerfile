FROM node:8

WORKDIR /usr/home/koyofea

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1619

CMD ["npm", "start"]
