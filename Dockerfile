FROM node:20.12.2-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install
RUN npm run build

ARG DB_URI
ARG DB_PORT
ARG JWT_SECRET

ENV DB_URI=$DB_URI
ENV DB_PORT=$DB_PORT
ENV JWT_SECRET=$JWT_SECRET

RUN echo "DB_URI=${DB_URI}" > .env
RUN echo "DB_PORT=${DB_PORT}" > .env
RUN echo "JWT_SECRET=${JWT_SECRET}" > .env

RUN apk upgrade --update-cache --available && apk add openssl

EXPOSE 3333
#ENV NODE_ENV production

COPY . .

CMD ["npm", "start"]