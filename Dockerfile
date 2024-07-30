FROM node:20.12.2-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

ARG DATABASE_URL
ARG JWT_SECRET

#ENV DATABASE_URL=$DATABASE_URL
#ENV JWT_SECRET=$JWT_SECRET

RUN echo "DATABASE_URL=${DATABASE_URL}" > .env
RUN echo "JWT_SECRET=${JWT_SECRET}" > .env

RUN apk upgrade --update-cache --available && apk add openssl

EXPOSE 3333
#ENV NODE_ENV production

COPY . .

#RUN npx prisma generate && npx prisma db push

CMD ["npm", "run", "build"]
#ENTRYPOINT [  "prisma", "generate", "&&", "prisma", "db", "push" ]