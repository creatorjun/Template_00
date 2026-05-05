# Template_00 — 포트폴리오 사이트 커스터마이징 가이드

React + Vite + Tailwind CSS 기반의 **다크 테마** 개발자 포트폴리오 사이트 템플릿입니다.
**고객 정보 수정은 단 하나의 파일(`src/config.js`)에서 99% 완결됩니다.**

---

## 프로젝트 구조

```
Template_00/
├── index.html                          # Vite 진입 HTML (파비콘·OG 태그 포함)
├── package.json                        # 의존성 및 스크립트
├── tailwind.config.js                  # Tailwind 테마 설정
├── postcss.config.js                   # PostCSS 설정
├── vite.config.js                      # Vite 빌드 설정
└── src/
    ├── main.jsx                        # React 루트 마운트
    ├── App.jsx                         # 전체 섹션 조합 컴포넌트
    ├── index.css                       # 전역 스타일
    ├── config.js                       # ★ 고객 정보 수정 파일 (핵심)
    ├── presentation/
    │   ├── components/
    │   │   ├── Navbar.jsx              # 상단 내비게이션 바
    │   │   ├── Hero.jsx                # 히어로 섹션 (이름·타이틀·통계)
    │   │   ├── About.jsx               # About 섹션
    │   │   ├── Career.jsx              # 경력 섹션
    │   │   ├── Projects.jsx            # 프로젝트 목록 섹션
    │   │   ├── Skills.jsx              # 스킬 섹션
    │   │   ├── CoverLetter.jsx         # 자기소개서 섹션
    │   │   ├── Contact.jsx             # 연락처 섹션
    │   │   └── projects/               # 프로젝트 카드 서브 컴포넌트
    │   ├── contexts/                   # React Context (PortfolioProvider)
    │   └── hooks/                      # Custom Hooks
    ├── application/                    # 애플리케이션 레이어
    ├── domain/                         # 도메인 레이어
    └── infrastructure/                 # 인프라 레이어
```

---

## 핵심 원칙: config.js 단일 수정

모든 UI 컴포넌트는 `src/config.js`에서 export된 상수를 import하여 화면에 렌더링합니다.
**컴포넌트 파일을 직접 건드리지 않아도 전체 사이트 내용이 바뀝니다.**

---

## `src/config.js` — 항목별 수정 가이드

### 1. PROFILE — 기본 프로필

```js
export const PROFILE = {
  nameKo:      '홍길동',          // 한글 이름 → Hero 섹션 메인 타이틀
  name:        'Hong Gildong',   // 영문 이름 → Hero 서브 타이틀 및 Navbar
  title:       'Full-Stack Game Developer',  // 직함
  subtitle:    'C++ · Unreal Engine · ...',  // 기술 스택 한 줄 요약
  description: '한 줄 자기소개',
  email:       'your-email@example.com',     // Contact 섹션 이메일 링크
  github:      'https://github.com/your-id', // GitHub 프로필 URL
  location:    '서울',                        // 거주 지역
  status:      '재직 중',                     // 구직 상태 (예: '구직 중', '재직 중')

  stats: [
    { value: '7+',  label: '개발 경력 (년)' },   // Hero 섹션 숫자 통계 카드
    { value: '3',   label: '근무 기업 수' },
    { value: '20+', label: '완성 프로젝트' },
    { value: '5+',  label: '출시 게임 타이틀' },
  ],
}
```

| 필드 | 표시 위치 | 비고 |
|------|-----------|------|
| `nameKo` | Hero 메인 헤딩 | 가장 크게 표시됨 |
| `title` | Hero 서브 텍스트, Navbar | |
| `subtitle` | Hero 기술 태그 줄 | `·` 로 구분하여 나열 |
| `email` | Contact 섹션 링크 | `mailto:` 자동 처리 |
| `github` | Contact 섹션, Hero 버튼 | 전체 URL 입력 |
| `stats` | Hero 하단 숫자 카드 4개 | value/label 쌍으로 자유 수정 |

---

### 2. ABOUT — About 섹션

```js
export const ABOUT = {
  headline:    '게임을 전체로 보는,',          // 대형 강조 문구 첫 줄
  subheadline: '엔진부터 풀스택까지.',          // 대형 강조 문구 둘째 줄
  paragraphs: [
    '첫 번째 단락 텍스트.',
    '두 번째 단락 텍스트.',
    '세 번째 단락 텍스트.',
  ],
}
```

- `headline` / `subheadline`: About 섹션 상단 대형 문구. 짧고 인상적인 한 문장 권장.
- `paragraphs`: 배열 원소 수만큼 단락이 생성됩니다. 2~4개 권장.

---

### 3. CAREERS — 경력 섹션

```js
export const CAREERS = [
  {
    company:      '회사명',
    role:         '직책 · 소속팀',
    period:       '2022.03 — 재직 중',      // 재직 기간 (자유 형식)
    achievements: [
      '주요 업무/성과 1',
      '주요 업무/성과 2',
    ],
  },
  // ... 추가 경력 객체
]
```

- 배열 순서대로 최신순으로 나열합니다.
- `achievements` 배열 원소 수만큼 불릿 포인트가 생성됩니다.
- 경력이 없는 경우 빈 배열 `[]`로 설정하면 Career 섹션이 자동으로 숨겨집니다.

---

### 4. PROJECTS — 프로젝트 섹션

```js
export const PROJECTS = [
  {
    id:     'unique-id',           // 고유 식별자 (영문 소문자, 하이픈 사용)
    name:   '프로젝트명',
    tag:    '기술 스택 태그',       // 프로젝트 카드 상단 회색 태그
    desc:   '프로젝트 설명 텍스트',
    image:  null,                  // 프로젝트 썸네일 이미지 URL (없으면 null)
    github: 'https://github.com/...', // GitHub 링크 (없으면 null)
    demo:   'https://...',         // 데모/배포 URL (없으면 null)
    metric: null,                  // 핵심 지표 문자열 (예: 'Star 120+', null 가능)
  },
]
```

- `image`: 외부 이미지 URL 또는 `public/` 디렉토리 내 이미지 경로(`/images/project.png`).
- `github` / `demo` 중 하나만 있어도 됩니다. `null`이면 해당 버튼이 렌더링되지 않습니다.
- `metric`: 프로젝트 카드에 강조 지표를 표시할 때 사용. 예: `'DAU 1만'`, `'4.8★ (2.1만 다운)'`.

---

### 5. SKILLS — 스킬 섹션

```js
export const SKILLS = [
  {
    label: '카테고리명',              // 스킬 그룹 제목
    items: ['스킬1', '스킬2', ...],  // 태그로 표시될 스킬 목록
  },
]
```

- 배열에 객체를 추가/삭제하여 카테고리 수를 자유롭게 조정합니다.
- `items` 순서대로 태그가 좌→우로 나열됩니다.

---

### 6. COVER_LETTER — 자기소개서 섹션

```js
export const COVER_LETTER = {
  sections: [
    {
      title: '소제목',
      body:  '본문 텍스트. 3~5문장 권장.',
    },
  ],
}
```

- `sections` 배열 원소 수만큼 자기소개서 항목이 생성됩니다.
- 각 항목은 `title`(소제목)과 `body`(본문)로 구성됩니다. 3~5개 항목 권장.

---

## `index.html` — 메타 정보 수정 가이드

Template_00은 `index.html`에 **파비콘, OG 태그, Twitter 카드**가 완비되어 있습니다.
배포 전 반드시 아래 항목들을 실제 정보로 교체해야 합니다.

### 파비콘

```html
<link rel="icon" type="image/x-icon" href="/fav.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/fav-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/fav-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

- `public/` 디렉토리에 `fav.ico`, `fav-32x32.png`, `fav-16x16.png`, `apple-touch-icon.png` 파일을 추가합니다.
- [favicon.io](https://favicon.io) 등에서 이미지를 업로드하면 4종 세트를 한 번에 생성할 수 있습니다.

### OG 태그 / Twitter 카드

```html
<meta name="description" content="OOO — Software Developer. C++, Python, Rust, Dart." />
<meta property="og:url"         content="https://your-domain.com/" />
<meta property="og:title"       content="OOO | Software Developer" />
<meta property="og:description" content="한 줄 소개 문구" />
<meta property="og:image"       content="https://your-domain.com/og.png" />
<meta property="og:site_name"   content="OOO Portfolio" />
<meta name="twitter:title"      content="OOO | Software Developer" />
<meta name="twitter:description" content="한 줄 소개 문구" />
<meta name="twitter:image"      content="https://your-domain.com/og.png" />
<title>OOO | Portfolio</title>
```

| 태그 | 수정 내용 |
|------|-----------|
| `description` | 검색 엔진 노출용 한 줄 소개 |
| `og:url` | 실제 배포 도메인으로 교체 |
| `og:title` / `twitter:title` | 이름 + 직함으로 교체 |
| `og:description` / `twitter:description` | 한 줄 소개 문구로 교체 |
| `og:image` / `twitter:image` | 1200×630px OG 이미지를 `public/og.png`에 추가 후 URL 교체 |
| `<title>` | 브라우저 탭 제목으로 교체 |

---

## 개발 서버 실행

```bash
npm install
npm run dev
```

## 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

---

## 컴포넌트 직접 수정이 필요한 경우

아래 경우에는 `config.js` 외의 파일을 수정합니다.

| 상황 | 수정 파일 |
|------|-----------|
| 내비게이션 메뉴 항목 추가/삭제 | `src/presentation/components/Navbar.jsx` |
| 사이트 전체 색상 테마 변경 | `tailwind.config.js` + `src/App.jsx` (bg 클래스) |
| 폰트 변경 | `index.html` (Google Fonts link) + `src/index.css` |
| 섹션 순서 변경 | `src/App.jsx` |
| 새로운 섹션 추가 | `src/presentation/components/` 에 신규 컴포넌트 추가 후 `src/App.jsx` 에 import |
| 파비콘 교체 | `public/` 에 파일 추가 + `index.html` href 수정 |
| OG 이미지 교체 | `public/og.png` 교체 + `index.html` URL 수정 |

---

## 자주 묻는 질문

**Q. 프로젝트 이미지를 넣으려면?**
`public/images/` 디렉토리에 이미지를 추가한 뒤 `PROJECTS[n].image` 값을 `/images/파일명.png`로 설정합니다.

**Q. GitHub / 데모 링크 버튼을 숨기려면?**
해당 `PROJECTS[n].github` 또는 `PROJECTS[n].demo` 값을 `null`로 설정합니다.

**Q. 경력이 없는 신입인 경우?**
`CAREERS` 배열을 빈 배열 `[]`로 설정하면 Career 섹션이 자동으로 숨겨집니다.

**Q. stats 카드를 4개보다 줄이거나 늘리려면?**
`PROFILE.stats` 배열의 원소 수를 조정합니다. UI는 자동으로 반응합니다.

**Q. SNS 링크(LinkedIn 등)를 추가하려면?**
`src/presentation/components/Contact.jsx`를 직접 수정하여 링크 항목을 추가합니다.
