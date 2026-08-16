import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const certifications = [
  {
    name: 'Soft Skills Competency — Gold Award (Degree)',
    issuer: 'TAR UMT',
    note: 'Issued Jul 2026',
  },
  {
    name: 'Soft Skills Competency — Gold Award (Diploma)',
    issuer: 'TAR UMT',
    note: 'Issued Nov 2024',
  },
  {
    name: 'MUET — Band 5.0',
    issuer: 'Malaysian University English Test',
    note: 'Issued Jul 2024',
  },
  {
    name: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    note: 'Issued May 2024',
  },
  {
    name: 'Communication Skills (Individual) — Grade 6, Merit',
    issuer: 'Trinity College London',
    note: 'Issued Dec 2021',
  },
  {
    name: 'Communication Skills (Individual) — Grade 4, Distinction',
    issuer: 'Trinity College London',
    note: 'Issued Dec 2018',
  },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHead eyebrow="Certifications" title="Credentials" counterName="section-certifications" />
        <div className="cert-list">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={Math.min(i, 6) * 50}>
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
