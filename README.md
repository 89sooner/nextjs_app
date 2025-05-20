# Next.js Todo App

이 프로젝트는 Node.js 22 버전과 TypeScript를 이용하여 만든 간단한 Todo 리스트 예제입니다. Next.js의 최신 버전을 사용하며, 기본적인 앱 구조를 제공합니다.

## 주요 스크립트
- `npm run dev` – 개발 서버 실행
- `npm run build` – 프로덕션 빌드
- `npm run start` – 프로덕션 모드로 실행

## 디렉터리 구조
- `app/` – Next.js 앱 라우팅을 담당하는 디렉터리
  - `layout.tsx` – 기본 레이아웃 정의
  - `page.tsx` – 메인 페이지로 Todo 리스트를 출력
  - `globals.css` – 전역 스타일
- `components/` – 재사용 가능한 컴포넌트 모음
  - `TodoList.tsx` – Todo 리스트 로직 및 UI

## 동작 방식
1. 브라우저에서 `/` 경로로 접속하면 `app/page.tsx`가 렌더링되며, 여기서 `TodoList` 컴포넌트를 불러옵니다.
2. `TodoList` 컴포넌트는 `useState`를 사용해 할 일 목록과 입력 값을 관리합니다.
3. 입력창에 내용을 작성하고 **추가** 버튼을 누르면 새로운 Todo 항목이 목록에 추가됩니다.
4. Todo 항목을 클릭하면 `completed` 상태가 토글되어 취소선으로 표시됩니다.
5. 현재 상태는 컴포넌트 내부에서만 관리되므로 새로고침 시 초기화됩니다.

## 시작하기
1. 의존성 설치
   ```bash
   npm install
   ```
2. 개발 서버 실행
   ```bash
   npm run dev
   ```
3. 브라우저에서 `http://localhost:3000`으로 접속하여 확인

## 추가 아이디어
- 상태 관리를 위해 context나 recoil 등 다른 라이브러리 사용 가능
- 데이터 영속화를 위해 로컬 스토리지 또는 백엔드 연동 고려
## 백엔드 연동 예시 (NestJS + PostgreSQL)
`backend` 디렉터리에는 NestJS 기반의 간단한 API 서버가 포함되어 있습니다. TypeORM을 사용해 PostgreSQL과 연결하며 Todo 데이터를 영속 저장합니다.

### 사용 방법
1. 백엔드 폴더로 이동 후 의존성 설치
   ```bash
   cd backend
   npm install
   ```
2. 개발 서버 실행
   ```bash
   npm run start:dev
   ```
3. 브라우저나 API 클라이언트에서 `http://localhost:4000/todos` 경로를 호출해 데이터를 주고 받을 수 있습니다.

데이터베이스 접속 설정은 `backend/src/app.module.ts` 파일에서 확인할 수 있으며, 실제 배포 시에는 환경 변수로 분리해 사용하면 좋습니다.
