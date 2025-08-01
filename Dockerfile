FROM node:18-alpine
WORKDIR /usr/app
COPY . .
RUN npm install 
EXPOSE 3000
CMD ["node", "app.js"]
