FROM node:alpine
WORKDIR /app
COPY package.json ./
copy package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]
