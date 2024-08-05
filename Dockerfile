FROM node:16-alpine

ENV NODE_ENV=production
ENV REACT_APP_API_URL=https://api.brigportfolio.com

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
