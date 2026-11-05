import { cn } from '@/lib/utils'

export default function Section({
  id,
  theme = 'white', // 'white', 'ivory', 'sand', 'dark', 'burgundy'
  number,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  headerAction,
}) {
  const isDark = theme === 'dark' || theme === 'burgundy'
  
  const themes = {
    white: 'bg-white text-charcoal',
    ivory: 'bg-ivory text-charcoal border-y border-ivory-sand',
    sand: 'bg-ivory-sand text-charcoal border-y border-ivory-border',
    dark: 'bg-charcoal text-white',
    burgundy: 'bg-burgundy text-white',
  }

  return (
    <section id={id} className={cn('relative py-16 md:py-24 overflow-hidden', themes[theme] || themes.white, className)}>
      <div className="mx-auto max-w-academic px-6 md:px-12">
        {(number || eyebrow || title) && (
          <div className="mb-10 md:mb-14">
            <div className={cn(
              'flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b',
              isDark ? 'border-white/15' : 'border-ivory-sand'
            )}>
              <div className="max-w-2xl">
                {(number || eyebrow) && (
                  <div className={cn(
                    'flex items-center gap-3 font-mono text-xs uppercase tracking-wider mb-2 font-bold',
                    isDark ? 'text-gold' : 'text-burgundy'
                  )}>
                    {number && <span>{number}</span>}
                    {number && eyebrow && <span className="opacity-40">—</span>}
                    {eyebrow && <span>{eyebrow}</span>}
                  </div>
                )}
                {title && (
                  <h2 className={cn(
                    'font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]',
                    isDark ? 'text-white' : 'text-charcoal'
                  )}>
                    {title}
                  </h2>
                )}
              </div>
              {(subtitle || headerAction) && (
                <div className="max-w-md flex flex-col gap-3">
                  {subtitle && (
                    <p className={cn(
                      'text-sm md:text-base font-light leading-relaxed',
                      isDark ? 'text-white/75' : 'text-charcoal-light'
                    )}>
                      {subtitle}
                    </p>
                  )}
                  {headerAction}
                </div>
              )}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
