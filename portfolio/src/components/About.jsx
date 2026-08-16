import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead eyebrow="About" title="Who I am" counterName="section-about" />
        <div className="about-grid">
          <Reveal delay={80}>
            <div className="about-text">
              <p>
                I'm a Software Engineering graduate based in Penang, Malaysia, with a habit of
                building things that need to work in the real world — not just in a notebook.
                My final year project, VISION, is a pair of AI-powered smart glasses for visually
                impaired users that went from a class assignment to winning Best Technology Award
                and getting selected as a finalist at an international innovation competition.
              </p>
              <p>
                I've spent internships debugging power hardware on an oscilloscope and building
                production-grade WPF applications for PCB manufacturing — I like the parts of
                engineering where software has to answer to physical reality.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <div className="edu-card">
                <p className="degree">Bachelor of Software Engineering (Honours)</p>
                <p className="meta">TAR UMT · CGPA 3.93 · Jul 2024 – Jul 2026</p>
              </div>
              <div className="edu-card">
                <p className="degree">Diploma in Computer Science</p>
                <p className="meta">TAR UMT · CGPA 3.99 · Jul 2022 – Jun 2024</p>
              </div>
              <a href="#education" className="edu-more">Full education timeline →</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
