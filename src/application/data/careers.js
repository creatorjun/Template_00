// src/application/data/careers.js

export const careers = [
  {
    id: 1,
    company: '㈜ AAA 게임즈',
    companySize: '대기업',
    position: '책임 개발자 · 게임 엔진팀',
    period: '2022.03 ~ 현재',
    type: '정규직',
    description: '자체 3D 게임 엔진 코어 모듈 개발 및 유지보수. C++ 기반 렌더링 파이프라인 최적화, 멀티플랫폼(PC/콘솔/모바일) 빌드 시스템 구축.',
    tasks: [
      '게임 엔진 렌더링 파이프라인 설계 및 최적화 (DirectX 12 / Vulkan)',
      '자체 물리 엔진 모듈 C++ 구현 및 성능 튜닝',
      'CI/CD 기반 멀티플랫폼 자동 빌드 파이프라인 구축',
      '신규 입사자 온보딩 및 코드 리뷰 문화 정착',
    ],
    skills: ['C++', 'DirectX 12', 'Vulkan', 'CMake', 'Python', 'Jenkins'],
  },
  {
    id: 2,
    company: '㈜ BBB 스튜디오',
    companySize: '대기업 계열',
    position: '시니어 개발자 · 게임 클라이언트팀',
    period: '2020.01 ~ 2022.02',
    type: '정규직',
    description: 'Unreal Engine 5 기반 MMORPG 클라이언트 개발. UI/UX 프레임워크 설계, 서버 통신 레이어 구현, 라이브 서비스 운영 대응.',
    tasks: [
      'UE5 게임플레이 어빌리티 시스템(GAS) 설계 및 구현',
      '게임 내 실시간 채팅·알림 시스템 Node.js 백엔드 구축',
      'REST / WebSocket 기반 서버 통신 추상 레이어 설계',
      '클라이언트 메모리 누수 분석 및 최적화 (30% 개선)',
    ],
    skills: ['Unreal Engine 5', 'C++', 'Blueprint', 'Node.js', 'WebSocket', 'AWS'],
  },
  {
    id: 3,
    company: '㈜ CCC 소프트',
    companySize: '중견기업',
    position: '개발자 · 모바일게임팀',
    period: '2018.07 ~ 2019.12',
    type: '정규직',
    description: 'Unity 기반 모바일 캐주얼 게임 2종 출시 및 운영. 풀스택 역할로 게임 클라이언트와 어드민 웹 대시보드를 함께 담당.',
    tasks: [
      'Unity C# 클라이언트 게임플레이 로직 전체 구현',
      'React + Express 기반 게임 어드민 대시보드 개발',
      'Google Play / App Store 출시 파이프라인 구성',
      'Firebase Analytics 연동 및 지표 모니터링 체계 수립',
    ],
    skills: ['Unity', 'C#', 'React', 'Express.js', 'Firebase', 'MySQL'],
  },
]
