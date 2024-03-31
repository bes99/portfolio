# 첫 번째 단계: Node.js 이미지를 사용하여 애플리케이션 빌드
FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 두 번째 단계: Nginx 이미지를 사용하여 빌드된 애플리케이션 제공
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html  
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
