import { links, metrics, profile, projects, skills } from './profileData.js';

export function App() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function Header() {
  return (
    <header className="topbar" aria-label="사이트 헤더">
      <a className="brand" href="#top" aria-label="상단으로 이동">
        <span className="brand-mark" aria-hidden="true">
          {profile.name.slice(0, 1)}
        </span>
        <span>{profile.name}</span>
      </a>
      <nav className="nav-links" aria-label="주요 섹션">
        <a href="#skills">기술</a>
        <a href="#projects">프로젝트</a>
        <a href="#contact">연락</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions" aria-label="주요 링크">
          <a className="button primary" href={profile.githubUrl}>
            GitHub 보기
          </a>
          <a className="button secondary" href="#projects">
            프로젝트 살펴보기
          </a>
        </div>
      </div>

      <aside className="profile-panel" aria-label="프로필 요약">
        <img
          className="workspace-image"
          src={`${import.meta.env.BASE_URL}assets/developer-workspace.png`}
          alt="개발 작업공간을 표현한 포트폴리오 이미지"
        />
        <div className="profile-meta">
          <div>
            <span className="meta-label">GitHub</span>
            <strong>@{profile.githubUsername}</strong>
          </div>
          <div>
            <span className="meta-label">Location</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
        <dl className="metric-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title">핵심 기술 스택</h2>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2 id="projects-title">대표 프로젝트</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <span>{project.status}</span>
            </div>
            <p>{project.description}</p>
            <ul className="tag-list" aria-label={`${project.title} 기술`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a href={project.repoUrl}>저장소 보기</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">다음 프로젝트를 이야기할 준비가 되어 있습니다.</h2>
      </div>
      <div className="contact-links">
        {links.map((link) => (
          <a className="button secondary" href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
