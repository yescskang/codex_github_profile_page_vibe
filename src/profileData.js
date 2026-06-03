export const profile = {
  name: '샘플 개발자',
  role: 'Frontend Engineer',
  headline: 'GitHub에서 검증 가능한 결과를 만드는 개발자',
  summary:
    '사용자 경험, 안정적인 프론트엔드 구조, 자동화된 배포 흐름을 함께 고민합니다. 프로젝트의 문제 정의부터 구현, 개선까지 책임 있게 다루는 개발자를 지향합니다.',
  location: 'Seoul, Korea',
  githubUsername: 'sample-dev',
  githubUrl: 'https://github.com/sample-dev',
  email: 'hello@example.com',
};

export const metrics = [
  { label: '대표 프로젝트', value: '4' },
  { label: '주요 기술', value: '9' },
  { label: '배포 대상', value: 'Pages' },
];

export const skills = [
  'React',
  'Vite',
  'JavaScript',
  'TypeScript',
  'CSS',
  'GitHub Actions',
  'Accessibility',
  'Performance',
  'UI Architecture',
];

export const projects = [
  {
    title: 'Portfolio System',
    description:
      '콘텐츠 설정 파일을 기반으로 프로필, 기술 스택, 프로젝트 목록을 관리하는 정적 포트폴리오입니다.',
    tags: ['React', 'Vite', 'GitHub Pages'],
    repoUrl: 'https://github.com/sample-dev/portfolio-system',
    status: '배포 준비',
  },
  {
    title: 'Issue Flow Board',
    description:
      '작업 우선순위와 상태를 한 화면에서 추적하는 개발팀용 이슈 보드 인터페이스입니다.',
    tags: ['React', 'State Management', 'UX'],
    repoUrl: 'https://github.com/sample-dev/issue-flow-board',
    status: '개선 중',
  },
  {
    title: 'Release Notes Builder',
    description:
      '커밋과 변경 기록을 정리해 배포 노트를 빠르게 작성하는 생산성 도구입니다.',
    tags: ['Automation', 'GitHub', 'Node.js'],
    repoUrl: 'https://github.com/sample-dev/release-notes-builder',
    status: '운영 중',
  },
  {
    title: 'Design Token Lab',
    description:
      '색상, 간격, 타이포그래피 토큰을 실험하고 UI 일관성을 점검하는 샘플 앱입니다.',
    tags: ['CSS', 'Design System', 'Frontend'],
    repoUrl: 'https://github.com/sample-dev/design-token-lab',
    status: '프로토타입',
  },
];

export const links = [
  { label: 'GitHub', href: profile.githubUrl },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Resume', href: '#' },
];
