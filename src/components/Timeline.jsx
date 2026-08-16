import { Fragment } from 'react'
import Reveal from './Reveal.jsx'

export default function Timeline({ items }) {
  return (
    <Reveal className="timeline">
      {items.map((item, i) => (
        <Fragment key={item.title + item.year}>
          <div className="tl-date" style={{ '--i': i }}>
            <span className="tl-year">{item.year}</span>
            <span className="tl-month">{item.month}</span>
          </div>

          <div className="tl-node">
            <span className="tl-dot" style={{ '--i': i }} />
            {i < items.length - 1 && <span className="tl-line" style={{ '--i': i }} />}
          </div>

          <div className="tl-content" style={{ '--i': i }}>
            <p className="role">{item.title}</p>
            {item.org && <p className="org">{item.org}{item.period ? ` · ${item.period}` : ''}</p>}
            {item.points && item.points.length > 0 && (
              <ul>
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        </Fragment>
      ))}
    </Reveal>
  )
}
