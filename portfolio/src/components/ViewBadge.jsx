import { useEffect, useRef, useState } from 'react'
import { bumpCounter, getCounter, isAnalyticsConfigured } from '../lib/counter.js'

export default function ViewBadge({ name, label = 'views', immediate = false }) {
  const ref = useRef(null)
  const [count, setCount] = useState(null)

  useEffect(() => {
    if (!isAnalyticsConfigured()) return
    const sessionKey = `viewed:${name}`

    async function record() {
      const alreadyCounted = sessionStorage.getItem(sessionKey)
      const result = alreadyCounted ? await getCounter(name) : await bumpCounter(name)
      if (!alreadyCounted) sessionStorage.setItem(sessionKey, '1')
      if (result !== null) setCount(result)
    }

    if (immediate) {
      record()
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(el)
          record()
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [name, immediate])

  if (!isAnalyticsConfigured() || count === null) {
    return <span ref={ref} className="view-badge-anchor" />
  }

  return (
    <span ref={ref} className="view-badge">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {count.toLocaleString()} {label}
    </span>
  )
}
