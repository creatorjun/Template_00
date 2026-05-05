// src/domain/valueObjects/Profile.js

export const Profile = Object.freeze({
  name: 'Hong Gildong',
  nameKo: '홍길동',
  title: 'Full-Stack Game Developer',
  subtitle: 'C++ · Unreal Engine · Unity · Node.js · React',
  description: '게임 엔진 개발부터 서버 백엔드, 웹 프론트까지 아우르는 풀스택 게임 개발자',
  email: 'your-email@example.com',
  github: 'https://github.com/your-github-id',
  location: '서울',
  status: '재직 중',
  stats: [
    { value: '7+', label: '개발 경력 (년)' },
    { value: '3', label: '근무 기업 수' },
    { value: '20+', label: '완성 프로젝트' },
    { value: '5+', label: '출시 게임 타이틀' },
  ],
})
