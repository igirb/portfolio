FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN echo "Installing dependencies..." && npm install

COPY . .

RUN echo "Building the application..." && npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
