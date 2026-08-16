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
                I'm a Software Engineering graduate based in Penang, Malaysia. My final year
                project, VISION, is a pair of AI-powered smart glasses for visually impaired
                users. It won Best Technology Award at TAR UMT EETPIX 2026 and was selected as a
                finalist at the GISU Urban Innovation Competition in Guangzhou, China, taking
                place October 2026.
              </p>
              <p>
                I've also completed internships in hardware testing and software development,
                including power supply validation on an oscilloscope and building a WPF
                application for PCB manufacturing.
              </p>
              <p className="hobby-note">♟️ Hobby: usually losing at chess.</p>
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
