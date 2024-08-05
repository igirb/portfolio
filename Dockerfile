FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN echo "Installing dependencies..." && NODE_ENV=development npm install

COPY . .

RUN echo "Building the application..." && npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]
