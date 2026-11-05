import { cn } from '@/lib/utils'

export default function Badge({ children, variant = 'burgundy', className = '' }) {
  const v = {
    burgundy: 'text-burgundy border-burgundy/30 bg-burgundy-soft',
    wine: 'text-burgundy-wine border-burgundy-wine/30 bg-burgundy-soft',
    gold: 'text-gold-dark border-gold/40 bg-gold-light',
    sand: 'text-charcoal border-ivory-sand bg-ivory-sand/60',
    academic: 'text-burgundy border-burgundy/30 bg-burgundy-soft',
  }
  return (
    <span className={cn('inline-flex items-center uppercase tracking-wider font-mono text-[11px] font-bold px-2.5 py-0.5 border', v[variant] || v.burgundy, className)}>
      {children}
    </span>
  )
}
