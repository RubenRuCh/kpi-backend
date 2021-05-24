FROM node:14.17

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
COPY . .
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm install 

#RUN npm run migrate
#RUN npm run seed

EXPOSE 4000
RUN chmod +x docker-entrypoint.sh
CMD /wait && docker-entrypoint.sh && npm start  
