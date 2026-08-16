import SectionHead from './SectionHead.jsx'
import Timeline from './Timeline.jsx'

const education = [
  {
    month: 'JUL',
    year: '2024',
    title: 'Bachelor of Software Engineering (Honours)',
    org: 'TAR UMT, Penang',
    period: 'Jul 2024 – Jul 2026',
    points: [
      "CGPA 3.93 · President's List · MUET Band 5.0",
      '100% Scholarship',
    ],
  },
  {
    month: 'JUL',
    year: '2022',
    title: 'Diploma in Computer Science',
    org: 'TAR UMT, Penang',
    period: 'Jul 2022 – Jun 2024',
    points: [
      "CGPA 3.99 · President's List",
      '50% TAR UMT Merit Scholarship + 50% Hong Leong Foundation Scholarship',
    ],
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead eyebrow="Education" title="Where I've studied" counterName="section-education" />
        <Timeline items={education} />
      </div>
    </section>
  )
}
