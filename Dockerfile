FROM node:20-alpine
RUN npm install -g expo-cli eas-cli
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081 19000 19001 19002
CMD ["expo", "start", "--tunnel"]
