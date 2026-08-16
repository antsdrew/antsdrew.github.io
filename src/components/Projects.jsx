import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const ordered = [...featured, ...rest]

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow="Projects" title="What I've built" counterName="section-projects" />
        <div className="projects-grid">
          {ordered.map((project, i) => (
            <Reveal
              key={project.id}
              delay={Math.min(i, 6) * 60}
              className={project.featured ? 'full-span' : ''}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
