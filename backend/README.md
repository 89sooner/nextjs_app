# Todo Backend (NestJS + PostgreSQL)

이 디렉터리는 NestJS와 PostgreSQL을 사용한 간단한 Todo API 예제를 제공합니다.

## 실행 방법

1. 의존성 설치
   ```bash
   npm install
   ```
2. 개발 서버 실행
   ```bash
   npm run start:dev
   ```

서버가 시작되면 `http://localhost:4000` 에서 동작하며, 주요 엔드포인트는 다음과 같습니다.

- `GET /todos` : Todo 목록 조회
- `POST /todos` : 새 Todo 생성 (`text` 필드 필요)

데이터베이스 접속 정보는 `src/app.module.ts` 파일의 `TypeOrmModule.forRoot()` 옵션에서 설정합니다. 실제 환경에서는 환경 변수로 분리하여 관리하는 것이 좋습니다.
