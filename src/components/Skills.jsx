import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

const groups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C', 'C#', 'Dart', 'Assembly', 'JavaScript', 'PHP', 'HTML', 'CSS', 'JSP'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['Flutter', 'YOLOv8', 'OpenCV', 'TensorFlow/Keras', 'scikit-learn', 'PyTorch', 'Hugging Face', 'Bootstrap', 'WPF/XAML'],
  },
  {
    label: 'Databases & Cloud',
    items: ['Oracle SQL', 'Firebase Firestore', 'Firebase Storage', 'Firebase Cloud Messaging'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Linux', 'Git', 'Raspberry Pi', 'Automated Testing', 'Cisco Networking', 'Microsoft Project'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead eyebrow="Skills" title="Tech stack" counterName="section-skills" />
        <Reveal delay={100}>
          <div className="skills-grid">
            {groups.map((g) => (
              <div className="skill-group" key={g.label}>
                <span className="eyebrow">{g.label}</span>
                <div className="skill-list">
                  {g.items.map((item) => (
                    <span className="skill-chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
