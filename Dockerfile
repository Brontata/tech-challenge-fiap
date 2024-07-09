FROM node:20.12.2-buster

WORKDIR /app

COPY . /app/
EXPOSE 3333
#ENV NODE_ENV production
RUN npm install
CMD ["npm", "start"]