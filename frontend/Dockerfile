# Node 22 기반 이미지를 사용합니다.
FROM node:22

# 애플리케이션 코드를 위한 작업 디렉터리 지정
WORKDIR /usr/src/app

# 패키지 매니페스트 복사 후 의존성 설치
COPY package.json package-lock.json* ./
RUN npm install --production

# 앱 소스 복사
COPY . .

# Next.js 빌드
RUN npm run build

# 앱이 사용할 포트 노출
EXPOSE 3000

# 프로덕션 모드로 앱 실행
CMD ["npm", "run", "start"]
