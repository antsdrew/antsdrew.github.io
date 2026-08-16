import { Link } from 'react-router-dom'
import { SHOW_REPO_LINKS } from '../data/projects.js'

export default function ProjectCard({ project }) {
  const cardClass = project.featured ? 'project-card featured' : 'project-card'
  const showRepo = SHOW_REPO_LINKS && project.repoUrl

  const body = (
    <div className="card-body">
      <span className="icon">{project.icon}</span>
      <h3>{project.title}</h3>
      <p className="subtitle">{project.subtitle}</p>
      {project.description && <p className="description">{project.description}</p>}

      {project.awards.length > 0 && (
        <div>
          {project.awards.map((award) => (
            <span className="award-pill" key={award}>{award}</span>
          ))}
        </div>
      )}

      {project.tech.length > 0 && (
        <div className="tech-tags">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>
      )}

      <div className="links">
        {project.hasDetailPage && <Link to={`/project/${project.id}`}>Read more →</Link>}
        {showRepo && <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site</a>}
        {!project.hasDetailPage && !showRepo && !project.liveUrl && (
          <span style={{ color: 'var(--muted)' }}>Repo coming soon</span>
        )}
      </div>
    </div>
  )

  if (project.featured) {
    return (
      <div className={cardClass}>
        {body}
        <div className="thumb">Screenshot coming soon</div>
      </div>
    )
  }

  return <div className={cardClass}>{body}</div>
}

