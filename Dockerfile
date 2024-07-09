FROM node:20.12.2-buster

WORKDIR /app

COPY . /app/

ARG DB_URI
ARG DB_PORT
ARG JWT_SECRET

ENV DB_URI=$DB_URI
ENV DB_PORT=$DB_PORT
ENV JWT_SECRET=$JWT_SECRET

RUN echo "DB_URI=${DB_URI}" > .env
RUN echo "DB_PORT=${DB_PORT}" > .env
RUN echo "JWT_SECRET=${JWT_SECRET}" > .env

EXPOSE 3333
#ENV NODE_ENV production
RUN npm install
CMD ["npm", "start"]