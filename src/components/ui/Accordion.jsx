import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items = [], theme = 'light' }) {
  const [open, setOpen] = useState([0])
  const toggle = i => setOpen(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i])
  const isDark = theme === 'dark'

  return (
    <div className={cn(
      'divide-y border-y',
      isDark ? 'divide-white/10 border-white/10' : 'divide-ivory-sand border-ivory-sand'
    )}>
      {items.map((item, i) => {
        const isOpen = open.includes(i)
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between text-left py-5 group focus-visible:outline-none"
            >
              <div className="flex items-baseline gap-4 pr-4">
                <span className={cn(
                  'font-mono text-xs font-bold',
                  isDark ? 'text-gold' : 'text-burgundy'
                )}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={cn(
                  'text-lg font-medium tracking-tight transition-colors',
                  isDark
                    ? 'text-white/90 group-hover:text-white'
                    : 'text-charcoal group-hover:text-burgundy',
                  isOpen && (isDark ? 'text-gold' : 'text-burgundy font-semibold')
                )}>
                  {item.title}
                </span>
              </div>
              <ChevronDown
                size={18}
                strokeWidth={1.5}
                className={cn(
                  'shrink-0 transition-transform duration-300',
                  isDark ? 'text-white/60' : 'text-charcoal-muted',
                  isOpen && (isDark ? 'rotate-180 text-gold' : 'rotate-180 text-burgundy')
                )}
              />
            </button>
            {isOpen && (
              <div className="pb-5 pl-10 pr-4 text-sm leading-relaxed font-light">
                <p className={isDark ? 'text-white/75' : 'text-charcoal-light'}>{item.desc}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
