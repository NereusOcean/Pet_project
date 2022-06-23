FROM node:12.18.1
ENV NODE_ENV=production
ENV HOST="http://localhost:3001"

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .
RUN ls

CMD [ "npm", "start" ]