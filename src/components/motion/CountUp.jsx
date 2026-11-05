import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CountUp({ target, suffix = '', duration = 1800, className = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) { setCount(target); return }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true)
        const start = performance.now()
        const tick = now => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(Math.floor(ease * target))
          if (p < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, duration, started, reduce])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}

