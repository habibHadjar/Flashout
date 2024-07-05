FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --only=dev

CMD ["npm", "run", "start"]