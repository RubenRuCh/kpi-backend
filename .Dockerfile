FROM node:14

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
COPY . .
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait
RUN npm install 

EXPOSE 4000

CMD /wait && npm start  
