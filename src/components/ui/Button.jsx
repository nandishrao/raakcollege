import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function Button({
  children,
  href,
  to,
  variant = 'burgundy',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled,
  ...rest
}) {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none shadow-sm'
  
  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const variants = {
    burgundy: 'bg-burgundy text-white hover:bg-burgundy-dark border border-burgundy',
    wine: 'bg-burgundy-wine text-white hover:bg-burgundy border border-burgundy-wine',
    gold: 'bg-gold text-white hover:bg-gold-dark border border-gold',
    'outline-burgundy': 'bg-transparent text-burgundy border-2 border-burgundy hover:bg-burgundy hover:text-white',
    'outline-gold': 'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-white',
    sand: 'bg-ivory-sand text-charcoal hover:bg-ivory border border-ivory-border',
    white: 'bg-white text-charcoal hover:bg-ivory-sand border border-ivory-sand shadow-sm',
    ghost: 'bg-transparent text-current hover:text-burgundy border border-transparent shadow-none',
    // Fallbacks
    academic: 'bg-burgundy text-white hover:bg-burgundy-dark border border-burgundy',
    'outline-academic': 'bg-transparent text-burgundy border-2 border-burgundy hover:bg-burgundy hover:text-white',
    'primary-dark': 'bg-charcoal text-white hover:bg-charcoal-dark border border-charcoal',
  }

  const cls = cn(base, sizes[size], variants[variant] || variants.burgundy, className)

  if (to) return <Link to={to} className={cls} onClick={onClick} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick} {...rest}>{children}</a>
  return <button type={type} disabled={disabled} className={cls} onClick={onClick} {...rest}>{children}</button>
}
