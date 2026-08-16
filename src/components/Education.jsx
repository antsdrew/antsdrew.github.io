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
  {
    month: 'MAR',
    year: '2022',
    title: 'Sijil Pelajaran Malaysia (SPM)',
    org: 'Chung Ling High School, Penang',
    period: 'Jan 2017 – Nov 2021 · Computer Science Stream',
    points: [
      '4A+, 3A, 1A-, 2B+',
      'A+: Bahasa Melayu, Bahasa Inggeris, Sejarah, Matematik',
      'A: Matematik Tambahan, Fizik, Kimia · A-: Sains Komputer · B+: Pendidikan Moral & Bahasa Cina',
      'Secretary of I-CreatorZ · Vice Treasurer of Chess Club · Treasurer of School Broadcast Unit',
      'Assistant Secretary of Civil Defence Cadet Corps (APM) · Class Monitor',
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
