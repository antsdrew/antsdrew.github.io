import Reveal from './Reveal.jsx'
import ViewBadge from './ViewBadge.jsx'

export default function SectionHead({ eyebrow, title, counterName, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="section-head-row">
        <span className="eyebrow">{eyebrow}</span>
        {counterName && <ViewBadge name={counterName} />}
      </div>
      <h2>{title}</h2>
    </Reveal>
  )
}
