import { cn } from '@/lib/utils'

export default function Marquee({ children, className = '' }) {
  return (
    <div className={cn('group relative flex overflow-hidden w-full select-none', className)} aria-label="Partner marquee">
      {[0, 1].map(k => (
        <div key={k} aria-hidden={k === 1}
          className="flex shrink-0 items-center gap-12 min-w-full animate-marquee group-hover:[animation-play-state:paused]">
          {children}
        </div>
      ))}
    </div>
  )
}

