// src/application/data/careers.js

/** @type {import('../../domain/entities/Career').Career[]} */
export const careers = [
  {
    company: '㈜ AAA 게임즈',
    role: '선임 개발자 · 게임 엔진팀',
    period: '2022.03 — 재직 중',
    achievements: [
      'C++20 기반 자체 3D 게임 엔진 코어 모듈 개발 및 유지보수',
      'DirectX 12 / Vulkan 렌더링 파이프라인 설계 및 성능 최적화',
      'CI/CD 기반 멀티플랫폼 (PC/콘솔/모바일) 자동 빌드 파이프라인 구축',
      '신규 입사자 온보딩 및 코드 리뷰 문화 주도',
    ],
  },
  {
    company: '㈜ BBB 스튜디오',
    role: '시니어 개발자 · 게임 클라이언트팀',
    period: '2020.01 — 2022.02',
    achievements: [
      'Unreal Engine 5 기반 MMORPG 클라이언트 개발 (GAS 시스템 설계 및 구현)',
      '게임 내 실시간 채팅·알림 Node.js 백엔드 구축',
      '클라이언트 메모리 누수 분석 및 최적화 (30% 성능 개선)',
      'REST / WebSocket 기반 서버 통신 추상 레이어 설계',
    ],
  },
  {
    company: '㈜ CCC 소프트',
    role: '개발자 · 모바일게임팀',
    period: '2018.07 — 2019.12',
    achievements: [
      'Unity C# 모바일 캐주얼 게임 2종 Google Play / App Store 출시',
      'React + Express 기반 게임 운영 어드민 대시보드 제작',
      'Firebase Analytics 연동 및 지표 모니터링 체계 수립',
      '인게임 결제(Unity IAP) 및 광고(AdMob) 모듈 연동',
    ],
  },
]
