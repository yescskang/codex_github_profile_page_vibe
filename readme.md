# GitHub Pages 개발자 포트폴리오

한국어 기반의 단일 페이지 개발자 포트폴리오 웹사이트입니다. Vite와 React로 구현되며, GitHub Pages 프로젝트 페이지로 배포되도록 구성되어 있습니다.

## 프로젝트 소개

이 프로젝트는 방문자가 개발자의 핵심 역량, 대표 프로젝트, GitHub 중심 활동, 연락 수단을 빠르게 확인할 수 있도록 만든 정적 포트폴리오입니다.

주요 특징:

- 프로필, 기술 스택, 프로젝트, 링크 정보를 한 화면에서 제공
- 샘플 개인 정보 기반으로 시작해 쉽게 교체 가능
- 콘텐츠 데이터를 `src/profileData.js`에 분리
- GitHub Pages 프로젝트 페이지 배포 경로 지원
- GitHub Actions를 통한 자동 배포

## 개발환경

- Node.js 24
- npm
- Vite
- React
- CSS
- GitHub Pages
- GitHub Actions

의존성은 `package-lock.json` 기준으로 설치합니다.

## 프로젝트 구조

```text
.
├── .github/workflows/deploy.yml
├── docs/
│   ├── development-harness.md
│   └── implementation-plan.md
├── public/assets/
│   └── developer-workspace.png
├── scripts/check-harness.sh
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── profileData.js
│   └── styles.css
├── index.html
├── package.json
├── readme.md
└── vite.config.js
```

## 로컬에서 실행방법

의존성을 설치합니다.

```bash
npm install
```

개발 서버를 실행합니다.

```bash
npm run dev
```

Vite 개발 서버는 GitHub Pages base path를 반영하므로 로컬에서는 다음 경로로 확인합니다.

```text
http://localhost:5173/codex_github_profile_page_vibe/
```

## 빌드 및 미리보기

프로덕션 빌드를 생성합니다.

```bash
npm run build
```

빌드 결과는 `dist/` 폴더에 생성됩니다.

빌드 결과를 로컬에서 미리 봅니다.

```bash
npm run preview
```

## 배포 방법

이 프로젝트는 GitHub Pages 프로젝트 페이지 배포를 기준으로 합니다.

- Vite base path: `/codex_github_profile_page_vibe/`
- 예상 배포 URL: `https://<github-username>.github.io/codex_github_profile_page_vibe/`
- 배포 워크플로: `.github/workflows/deploy.yml`
- 배포 산출물: `dist/`

배포 절차:

1. GitHub 저장소의 Pages 설정에서 Source를 GitHub Actions로 설정합니다.
2. 변경 사항을 `main` 브랜치에 push합니다.
3. GitHub Actions의 `Deploy to GitHub Pages` 워크플로가 실행됩니다.
4. 워크플로는 `npm ci`, `scripts/check-harness.sh`, `npm run build`를 실행한 뒤 `dist/`를 GitHub Pages에 배포합니다.

수동 배포가 필요하면 GitHub Actions 화면에서 `Deploy to GitHub Pages` 워크플로를 `workflow_dispatch`로 실행합니다.

## 콘텐츠 수정 방법

프로필, 기술 스택, 프로젝트, 링크는 `src/profileData.js`에서 수정합니다.

수정 대상:

- `profile`: 이름, 역할, 소개 문구, GitHub 사용자명, 이메일
- `metrics`: 대표 지표
- `skills`: 기술 스택
- `projects`: 대표 프로젝트 목록
- `links`: 외부 링크

현재 구현은 GitHub API 자동 연동을 사용하지 않습니다. 실제 GitHub 저장소나 프로젝트를 노출하려면 `src/profileData.js`의 샘플 값을 직접 교체합니다.

## 하네스 및 문서 갱신 규칙

프로젝트 내용, 개발환경, 실행 방법, 배포 방법이 바뀌면 다음 문서를 함께 갱신합니다.

- `docs/implementation-plan.md`
- `docs/development-harness.md`
- `readme.md`
- `AGENTS.md`

변경을 마치기 전 하네스 검사를 실행합니다.

```bash
scripts/check-harness.sh
```

앱 코드가 변경된 경우 빌드도 함께 확인합니다.

```bash
npm run build
```
