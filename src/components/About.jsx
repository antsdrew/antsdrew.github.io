import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead eyebrow="About" title="Who I am" counterName="section-about" />
        <Reveal delay={80}>
          <div className="about-text">
            <p>
              I'm a Software Engineering graduate based in Penang, Malaysia. My final year
              project, VISION, is a pair of AI-powered smart glasses for visually impaired
              users, paired with a companion mobile application for both them and their
              caretakers. It won Best Technology Award at TAR UMT EETPIX 2026 and was selected
              as a finalist at the GISU Urban Innovation Competition in Guangzhou, China, taking
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
      </div>
    </section>
  )
}
