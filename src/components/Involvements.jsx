import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const involvements = [
  {
    title: 'ASEAN GeoAI Fusion Bootcamp and Hackathon 2026 — Team Awawa',
    period: 'Aug 2026 · International',
    points: [
      'Project: "Dino Slayer" — a decision-support platform for Sabah connectivity pre-feasibility screening and infrastructure prioritisation',
      'Built with teammates Ooi Rui Zhe and Ryan Chin Jian Hwa, combining population, connectivity, facilities, and flood-risk datasets',
      '2nd on the 5-team waiting list for the top-15 physical final round',
    ],
  },
  {
    title: 'StartupPenang500@University',
    period: 'May 2025 – Nov 2025 · State',
    points: [
      'Pitched VISION at Campus Tech X Challenge 2025',
      'Presented the MVP at Startup Venture Vibes Summit 2025',
    ],
  },
  {
    title: 'Jabil Early Career Programs (ECP) Bootcamp 2.0',
    period: 'June 2025 · State',
    points: [
      'Mentorship and networking with industry subject matter experts',
      'Hands-on projects applying Data Science and SAP concepts to real business challenges',
      'Delivered a case study presentation to industry experts',
    ],
  },
  {
    title: 'Mount Miriam Cancer Hospital Volunteer Project',
    period: 'Community Service · District',
    points: [
      'Volunteer work supporting patients and hospital operations',
    ],
  },
  {
    title: 'CLHS International Cultural Exchange Programme',
    period: '2021 · International',
    points: [
      'Served as Emcee for the international cultural exchange programme',
    ],
  },
  {
    title: 'Broadcom MASTERS International',
    period: '2018 · International',
    points: [
      'Represented Malaysia at the international science and engineering fair',
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
            <Reveal key={item.title} delay={Math.min(i, 6) * 60}>
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
