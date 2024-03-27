# Node.js 공식 이미지를 베이스 이미지로 사용
FROM node:alpine

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# package.json과 package-lock.json을 모두 복사
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 빌드 시
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

# 빌드 생성
RUN npm run build

# 빌드된 정적 파일을 서빙할 웹 서버 설치
RUN npm install -g serve

# 앱 실행
CMD ["serve", "-s", "build"]
