# 1. Node.js를 사용하여 빌드합니다.
FROM node:20 AS build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 의존성 설치
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# 4. 소스 코드 복사 및 빌드
COPY . ./
RUN npm run build

# 5. Nginx를 사용하여 정적 파일 제공
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# 6. Nginx 설정 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# 7. 컨테이너 실행
EXPOSE 3031
CMD ["nginx", "-g", "daemon off;"]

ENTRYPOINT ["/docker-entrypoint.sh"]

