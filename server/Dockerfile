FROM node:14-slim
WORKDIR /app
COPY package.json /app
RUN npm install
ENV MONGO_URL=mongodb://mongo:27017/myMongo
ENV TOKEN_SECRET = s!khTP4ch4E#J#bD
COPY . /app
CMD ["npm", "start"]