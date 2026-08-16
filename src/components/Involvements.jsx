import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const involvements = [
  {
    title: 'GeoAI Fusion Hackathon — Team Dino Slayer',
    period: 'Aug 2026',
    points: [
      'Built a geospatial data pipeline for Sabah combining population, connectivity, facilities, and flood-risk datasets, with teammates Ooi Rui Zhe and Ryan Chin Jian Hwa',
      '2nd on the 5-team waiting list for the top-15 physical final round',
    ],
  },
  {
    title: 'StartupPenang500@University',
    period: 'May 2025 – Nov 2025',
    points: [
      'Pitched VISION at Campus Tech X Challenge 2025',
      'Presented the MVP at Startup Venture Vibes Summit 2025',
    ],
  },
  {
    title: 'Jabil Early Career Programs (ECP) Bootcamp 2.0',
    period: 'June 2025',
    points: [
      'Mentorship and networking with industry subject matter experts',
      'Hands-on projects applying Data Science and SAP concepts to real business challenges',
      'Delivered a case study presentation to industry experts',
    ],
  },
]

export default function Involvements() {
  return (
    <section className="section" id="involvements">
      <div className="container">
        <SectionHead eyebrow="Involvements" title="Co-curricular" counterName="section-involvements" />
        <div className="involvement-list">
          {involvements.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="involvement-item">
                <p className="involvement-title">{item.title}</p>
                <p className="involvement-period">{item.period}</p>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
