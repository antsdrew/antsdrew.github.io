import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const certifications = [
  {
    name: 'Cisco Networking Academy — CCNAv7',
    issuer: 'Cisco',
    note: 'Core networking, routing & switching fundamentals',
  },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHead eyebrow="Certifications" title="Credentials" counterName="section-certifications" />
        <div className="cert-list">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="cert-item">
                <p className="cert-name">{c.name}</p>
                <p className="cert-issuer">{c.issuer} · {c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
