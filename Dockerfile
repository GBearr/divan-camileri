FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003
ENV HOST=0.0.0.0 PORT=3003
CMD ["npm", "run", "start"]