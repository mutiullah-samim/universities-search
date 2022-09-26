FROM node:16-alpine

WORKDIR /app

COPY  . .

RUN npm install

ENV PORT=5500
ENV NODE_ENV production

EXPOSE 5500

CMD [ "npm", "run", "start" ]