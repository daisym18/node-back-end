FROM node:latest
WORKDIR /app
ACD ./app
RUN npm install
EXPOSE 3000
CMD npm start

