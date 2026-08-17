import { useState } from 'react'
import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const featured = projects.filter((p) => p.featured)
  const main = projects.filter((p) => !p.featured && p.main)
  const rest = projects.filter((p) => !p.featured && !p.main)

  const visible = [...featured, ...main]

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow="Projects" title="What I've built" counterName="section-projects" />
        <div className="projects-grid">
          {visible.map((project, i) => (
            <Reveal
              key={project.id}
              delay={Math.min(i, 6) * 60}
              className={project.featured ? 'full-span' : ''}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}

          {showAll &&
            rest.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(i, 6) * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
        </div>

        {rest.length > 0 && (
          <div className="show-more-row">
            <button className="btn btn-secondary" onClick={() => setShowAll((v) => !v)}>
              {showAll ? 'Show less' : `Show ${rest.length} more projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
