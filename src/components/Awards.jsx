import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const awards = [
  'Best Technology Award — TAR UMT EETPIX 2026 (FYP Exhibition Day)',
  'Finalist — 2026 GISU Urban Innovation & Entrepreneurship Competition, Guangzhou, China (upcoming, Oct 2026)',
  '1st Runner-Up — Campus Tech X Challenge 2025 (StartupPenang500@University)',
  'Second Runner-Up — Jabil Early Career Programs Bootcamp 2.0, 2025',
]

export default function Awards() {
  return (
    <section className="section" id="awards">
      <div className="container">
        <SectionHead eyebrow="Awards" title="Recognition" counterName="section-awards" />
        <div className="awards-list">
          {awards.map((a, i) => (
            <Reveal key={a} delay={Math.min(i, 6) * 50}>
              <div className="award-item">{a}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
