import { useParams, Link } from 'react-router-dom'
import projects, { SHOW_REPO_LINKS } from '../data/projects.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const unavailable = !project || !project.hasDetailPage || !project.detailPageEnabled

  if (unavailable) {
    return (
      <>
        <Navbar />
        <div className="container detail-page">
          <p>This project page isn't available yet.</p>
          <Link to="/" className="back-link">← Back home</Link>
        </div>
        <Footer />
      </>
    )
  }

  const hasGroups = project.screenshotGroups && project.screenshotGroups.length > 0

  return (
    <>
      <Navbar />
      <div className="container detail-page">
        <Link to="/#projects" className="back-link">← Back to projects</Link>

        <h1>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>
        <p className="period">{project.period}</p>

        {hasGroups ? (
          <div className="screenshot-groups">
            {project.screenshotGroups.map((group) => (
              <div className="screenshot-group" key={group.title}>
                <h3 className="screenshot-group-title">{group.title}</h3>
                <div className={`screenshot-${group.layout}`}>
                  {group.items.map((s) => (
                    <figure className="screenshot-item" key={s.src}>
                      <img src={s.src} alt={s.caption} loading="lazy" />
                      <figcaption>{s.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="thumb" style={{ marginBottom: 40, aspectRatio: '16/7' }}>
            DEMO SCREENSHOT / VIDEO PLACEHOLDER
          </div>
        )}

        <div className="detail-section">
          <h2>Overview</h2>
          <p style={{ color: 'var(--muted)' }}>{project.description}</p>
        </div>

        {project.features.length > 0 && (
          <div className="detail-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {project.awards.length > 0 && (
          <div className="detail-section">
            <h2>Awards & Recognition</h2>
            {project.awards.map((a) => (
              <span className="award-pill" key={a}>{a}</span>
            ))}
          </div>
        )}

        {project.tech.length > 0 && (
          <div className="detail-section">
            <h2>Tech Stack</h2>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        )}

        <div className="detail-section links">
          {SHOW_REPO_LINKS && project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub Repo →</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ marginLeft: 20 }}>Live Site →</a>}
        </div>
      </div>
      <Footer />
    </>
  )
}
