import { useEffect, useRef } from 'react'

export default function HeroNetwork() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf, visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.parentElement.clientWidth
      const h = canvas.parentElement.clientHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
      return { w, h }
    }
    let { w, h } = resize()
    window.addEventListener('resize', () => { ;({ w, h } = resize()) })

    const N = Math.floor(Math.min(w, 1400) / 22)
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
      r: Math.random() * 1.5 + .8,
      isGold: Math.random() > .80,
    }))
    const mouse = { x: -9999, y: -9999 }
    const onMove = e => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top
    }
    window.addEventListener('mousemove', onMove)

    const obs = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: .05 })
    obs.observe(canvas)

    const D = 120
    const draw = () => {
      if (!visible) { raf = requestAnimationFrame(draw); return }
      ctx.clearRect(0, 0, w, h)
      
      // Draw academic burgundy and gold connections (zero blue)
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const d = Math.hypot(dx, dy)
          if (d < D) {
            const a = (1 - d / D) * .14
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = nodes[i].isGold || nodes[j].isGold
              ? `rgba(181, 139, 85, ${a * 1.3})` // #B58B55 Antique Gold
              : `rgba(84, 43, 56, ${a})`         // #542B38 Deep Burgundy
            ctx.lineWidth = .75
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const dm = Math.hypot(mouse.x - n.x, mouse.y - n.y)
        if (dm < 120) {
          const f = (1 - dm / 120) * .4
          n.vx -= (mouse.x - n.x) / dm * f * .1
          n.vy -= (mouse.y - n.y) / dm * f * .1
        }
        n.x += n.vx; n.y += n.vy; n.vx *= .99; n.vy *= .99
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.isGold ? 'rgba(181, 139, 85, .75)' : 'rgba(84, 43, 56, .55)'
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      obs.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full opacity-40 z-0"
    />
  )
}
