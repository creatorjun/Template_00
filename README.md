# Portfolio Template

30세 남성 소프트웨어 개발자를 위한 포트폴리오 웹사이트 템플릿입니다.

React + Vite + Tailwind CSS 기반, Clean Architecture / DDD 구조로 설계되었습니다.

## 시작하기

```bash
npm install
npm run dev
```

## 개인정보 수정 위치

| 파일 | 수정 내용 |
|---|---|
| `src/domain/valueObjects/Profile.js` | 이름, 이메일, GitHub URL, 상태, 통계 수치 |
| `src/application/data/careers.js` | 회사명, 직책, 근무 기간, 업무 내용 |
| `src/application/data/projects.js` | 프로젝트명, 기술 스택, 설명, GitHub/Demo URL |
| `src/application/data/skills.js` | 기술 스택 항목 |
| `index.html` | OG 태그, 도메인, 타이틀 |

## 이미지 추가

`public/images/` 디렉토리에 프로젝트 스크린샷을 넣고
`projects.js`의 `image` 필드에 파일명을 입력하세요.

이미지가 없으면 자동으로 플레이스홀더가 표시됩니다.

## 구조

```
src/
├── domain/          # 엔티티, 레포지토리 인터페이스, Profile 값 객체
├── application/     # 데이터, 레포지토리 구현체, UseCase, Service
└── presentation/    # React 컴포넌트, Context, Hooks
```
