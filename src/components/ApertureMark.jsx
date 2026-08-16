export default function ApertureMark({ size = 32, ticks = 8 }) {
  const center = size / 2
  const outerR = size / 2 - 2
  const innerR = outerR - size * 0.18
  const tickInner = outerR + 2
  const tickOuter = outerR + size * 0.14

  const tickLines = Array.from({ length: ticks }).map((_, i) => {
    const angle = (i / ticks) * Math.PI * 2
    const x1 = center + Math.cos(angle) * tickInner
    const y1 = center + Math.sin(angle) * tickInner
    const x2 = center + Math.cos(angle) * tickOuter
    const y2 = center + Math.sin(angle) * tickOuter
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
  })

  return (
    <svg
      className="aperture-mark"
      width={size + size * 0.3}
      height={size + size * 0.3}
      viewBox={`${-size * 0.15} ${-size * 0.15} ${size + size * 0.3} ${size + size * 0.3}`}
      fill="none"
    >
      <circle cx={center} cy={center} r={outerR} stroke="currentColor" strokeWidth="1.4" />
      <circle cx={center} cy={center} r={innerR} stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        {tickLines}
      </g>
    </svg>
  )
}
