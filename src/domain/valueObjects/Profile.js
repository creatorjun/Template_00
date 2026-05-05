// src/domain/valueObjects/Profile.js

export const Profile = Object.freeze({
  name: 'OOO',
  nameKo: 'OOO',
  title: 'Software Developer',
  subtitle: 'C++ · Python · Rust · Dart',
  description: '시스템 프로그래밍부터 AI 백엔드, 크로스플랫폼 앱까지',
  email: 'your-email@example.com',
  github: 'https://github.com/your-github-id',
  location: '서울',
  status: '구직 중',
  stats: [
    { value: '5+', label: '개발 경력 (년)' },
    { value: '10+', label: '실운영 배포 건수' },
    { value: '15+', label: '완성 프로젝트' },
    { value: '2+', label: '오픈소스 퍼블리시' },
  ],
})
