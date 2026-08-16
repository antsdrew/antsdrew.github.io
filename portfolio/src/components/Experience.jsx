import SectionHead from './SectionHead.jsx'
import Timeline from './Timeline.jsx'

const experience = [
  {
    month: 'JAN',
    year: '2026',
    title: 'R&D Intern',
    org: 'Guangdong Gospower Electric Technology Co., Ltd., Dongguan, China',
    period: 'Jan 2026 – Jul 2026',
    points: [
      'PMBus communication and telemetry verification, including register validation and hardware comparison',
      'Power supply testing and validation using oscilloscopes, electronic loads, and power analysers',
      'Hardware debugging and reliability testing (HALT, temperature/humidity, noise analysis)',
    ],
  },
  {
    month: 'NOV',
    year: '2023',
    title: 'Software Developer Intern',
    org: 'SiP Technology (M) Sdn Bhd, Penang',
    period: 'Nov 2023 – Jan 2024',
    points: [
      'Led a team of 3 migrating legacy software to a modern WPF application (C#, XAML, JSON), delivered within a 10-week deadline',
      'Built a GUI to visualise and manage PCB panel dispensing processes with real-time data logging',
      'Implemented TCP client-server communication and role-based admin authentication',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead eyebrow="Experience" title="Where I've worked" counterName="section-experience" />
        <Timeline items={experience} />
      </div>
    </section>
  )
}
