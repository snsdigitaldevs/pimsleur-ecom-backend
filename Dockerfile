FROM node:20-bullseye-slim
RUN apt-get update
RUN apt-get -y autoremove

WORKDIR /usr/scr/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm cache clean --force

EXPOSE 90 9000

CMD ["npm", "run", "start"]



