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

## Docker로 실행하기
1. 이미지를 빌드합니다.
   ```bash
   docker build -t nextjs-todo .
   ```
2. 컨테이너를 실행합니다.
   ```bash
   docker run -p 3000:3000 nextjs-todo
   ```
3. 브라우저에서 `http://localhost:3000`을 열어 앱을 확인합니다.
