import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  Phone,
  Mail,
  Award,
  ArrowRight,
  School,
  GraduationCap,
  BookOpen,
  Layers,
  Cpu,
  Briefcase,
  ShieldCheck,
  Home,
  Info,
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react'
import { siteConfig } from '@/content/site'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navGroups = [
  {
    title: "01 · INSTITUTION",
    links: [
      { href: "/", label: "Overview & Home", icon: Home },
      { href: "/about", label: "About & IITian Leadership", icon: Info },
    ]
  },
  {
    title: "02 · ACADEMIC SCHEMES",
    links: [
      { href: "/schools", label: "Schools & STEAM (K-12)", icon: School, badge: "ATL Labs" },
      { href: "/curriculum", label: "VTU & BUCurriculam", icon: BookOpen, badge: "NEP 2020" },
      { href: "/programmes", label: "Flagship Degree Programmes", icon: GraduationCap, badge: "B.Tech & BCA" },
      { href: "/certifications", label: "Industry Certifications", icon: Award, badge: "8 Tracks" },
    ]
  },
  {
    title: "03 · CAMPUS INFRASTRUCTURE",
    links: [
      { href: "/daas", label: "DaaS Model", icon: Layers, badge: "5 Steps" },
      { href: "/labs", label: "Centre of Excellence Labs", icon: Cpu, badge: "7 Labs" },
      { href: "/careers-ecosystem", label: "Placements & Internships", icon: Briefcase },
      { href: "/recognition", label: "Accreditation & Partners", icon: ShieldCheck, badge: "ISO / DPIIT" },
    ]
  }
]

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const { pathname } = useLocation()

  // Close burger sidebar on route change
  useEffect(() => {
    setBurgerOpen(false)
  }, [pathname])

  // Prevent background scrolling when burger sidebar is open
  useEffect(() => {
    document.body.style.overflow = burgerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [burgerOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setBurgerOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-40 bg-white border-b border-ivory-sand shadow-sm">
        {/* Top Institutional Strip */}
        <div className="bg-burgundy text-white py-2 px-6 text-xs font-mono hidden md:block">
          <div className="mx-auto max-w-academic flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-gold-soft font-semibold">
                <Award size={13} className="text-gold" /> Run by Navodayan Alumni & IITians
              </span>
              <span className="text-white/30">|</span>
              <span className="text-white/85 text-[11px]">
                Schools (K-12 & ATL) · Bangalore University (BU) · VTU Engineering Colleges
              </span>
            </div>
            <div className="flex items-center gap-6 text-[11px]">
              <a href="tel:+919742225873" className="flex items-center gap-1.5 hover:text-gold-soft transition-colors">
                <Phone size={11} className="text-gold" /> +91 97422 25873
              </a>
              <a href="mailto:contactus@raaksapphire.com" className="flex items-center gap-1.5 hover:text-gold-soft transition-colors">
                <Mail size={11} className="text-gold" /> contactus@raaksapphire.com
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="py-3 px-6 md:px-12 bg-white">
          <div className="mx-auto max-w-academic flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus-visible:outline-none">
              <img
                src="/logo.png"
                alt="RAAK SAPPHIRE"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* Quick Desktop Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-wider" aria-label="Quick Nav">
              <Link
                to="/schools"
                className={cn('transition-colors py-1 hover:text-burgundy', pathname === '/schools' ? 'text-burgundy font-bold border-b-2 border-burgundy' : 'text-charcoal')}
              >
                Schools & ATL
              </Link>
              <Link
                to="/curriculum"
                className={cn('transition-colors py-1 hover:text-burgundy', pathname === '/curriculum' ? 'text-burgundy font-bold border-b-2 border-burgundy' : 'text-charcoal')}
              >
                VTU & BU Curriculamm
              </Link>
              <Link
                to="/programmes"
                className={cn('transition-colors py-1 hover:text-burgundy', pathname.startsWith('/programmes') ? 'text-burgundy font-bold border-b-2 border-burgundy' : 'text-charcoal')}
              >
                Programmes
              </Link>
              <Link
                to="/daas"
                className={cn('transition-colors py-1 hover:text-burgundy', pathname === '/daas' ? 'text-burgundy font-bold border-b-2 border-burgundy' : 'text-charcoal')}
              >
                DaaS Model
              </Link>
            </nav>

            {/* Right Group: Partner CTA + Prominent Burger Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                to="/partner"
                variant="burgundy"
                size="sm"
                className="hidden sm:inline-flex font-mono text-xs uppercase tracking-wider font-bold py-2.5 px-5 shadow-sm"
              >
                Partner With Us
              </Button>

              {/* ── BURGER MENU BUTTON ── */}
              <button
                type="button"
                onClick={() => setBurgerOpen(true)}
                aria-label="Open Academic Navigation Sidebar"
                aria-expanded={burgerOpen}
                className="group inline-flex items-center gap-2.5 px-3.5 py-2 border-2 border-charcoal/20 hover:border-burgundy bg-ivory text-charcoal hover:text-burgundy transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy shadow-sm"
              >
                <div className="flex flex-col gap-1 w-4 sm:w-5">
                  <span className="h-0.5 w-full bg-current transition-transform duration-200 group-hover:scale-x-110" />
                  <span className="h-0.5 w-full bg-current transition-transform duration-200" />
                  <span className="h-0.5 w-3/4 bg-current transition-transform duration-200 group-hover:w-full" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider font-bold select-none">
                  MENU
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── BURGER SIDEBAR DRAWER ───────────────────────────────────────── */}
      {burgerOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Academic Navigation Sidebar"
        >
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm animate-fadeIn transition-opacity"
            onClick={() => setBurgerOpen(false)}
          />

          {/* Slide-out Sidebar Panel */}
          <aside
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed inset-y-0 right-0 w-full sm:w-[440px] max-w-[95vw] bg-ivory border-l border-ivory-sand shadow-2xl flex flex-col z-50 animate-slideLeft overscroll-contain"
          >
            {/* Sidebar Header (Fixed at top) */}
            <div className="shrink-0 p-5 sm:p-6 bg-white border-b border-ivory-sand flex items-center justify-between">
              <Link to="/" onClick={() => setBurgerOpen(false)} className="flex items-center gap-2">
                <img src="/logo.png" alt="RAAK Sapphire" className="h-10 w-auto object-contain" />
              </Link>
              <button
                type="button"
                onClick={() => setBurgerOpen(false)}
                aria-label="Close Navigation Sidebar"
                className="p-2 border border-ivory-sand bg-ivory text-charcoal hover:text-burgundy hover:border-burgundy transition-colors focus-visible:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Sub-strip inside sidebar */}
            <div className="shrink-0 bg-sand/60 px-5 sm:px-6 py-2.5 border-b border-ivory-sand text-[11px] font-mono text-charcoal flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-burgundy font-bold">
                <Award size={13} className="text-gold shrink-0" /> Navodayan Alumni & IITians
              </span>
              <span className="text-charcoal-muted uppercase text-[10px] font-semibold">Academic Portal</span>
            </div>

            {/* Scrollable Nav Content (Full Scroll Area with min-h-0 and data-lenis-prevent) */}
            <div
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-6 py-6 space-y-7 custom-scrollbar overscroll-contain"
            >
              {navGroups.map((group) => (
                <div key={group.title}>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-burgundy font-bold mb-3 pb-1 border-b border-ivory-sand">
                    {group.title}
                  </div>
                  <nav className="space-y-1">
                    {group.links.map((link) => {
                      const Icon = link.icon
                      const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                      return (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setBurgerOpen(false)}
                          className={cn(
                            'flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 border-l-2 focus-visible:outline-none',
                            active
                              ? 'bg-burgundy text-white border-gold font-bold shadow-sm'
                              : 'text-charcoal hover:text-burgundy hover:bg-sand/70 border-transparent'
                          )}
                        >
                          <div className="flex items-center gap-3 truncate">
                            <Icon size={16} className={active ? 'text-gold' : 'text-burgundy shrink-0'} />
                            <span className="truncate">{link.label}</span>
                          </div>
                          {link.badge && (
                            <span className={cn(
                              'font-mono text-[9px] uppercase px-1.5 py-0.5 font-bold shrink-0 ml-2',
                              active ? 'bg-white/20 text-white' : 'bg-sand text-burgundy border border-ivory-sand'
                            )}>
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      )
                    })}
                  </nav>
                </div>
              ))}

              {/* Quick Institutional Focus Card */}
              <div className="bg-white p-5 border border-ivory-sand shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold-dark font-bold">
                    <Sparkles size={13} className="text-burgundy" /> Department-as-a-Service
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <img
                      src="/vtu-logo.png"
                      alt="VTU"
                      title="Visvesvaraya Technological University"
                      className="h-8 w-8 object-contain rounded-full bg-white p-0.5 border border-ivory-sand shadow-xs"
                    />
                    <img
                      src="/bu-logo.png"
                      alt="Bangalore University"
                      title="Bangalore University"
                      className="h-8 w-8 object-contain rounded-full bg-white p-0.5 border border-ivory-sand shadow-xs"
                    />
                  </div>
                </div>
                <p className="text-xs text-charcoal-light font-light leading-relaxed mb-4">
                  Turn key AI, Robotics and Drone department establishment for schools, Bangalore University, and VTU engineering colleges.
                </p>
                <Button
                  to="/partner"
                  variant="burgundy"
                  size="sm"
                  onClick={() => setBurgerOpen(false)}
                  className="w-full font-mono text-xs uppercase tracking-wider font-bold py-2.5"
                >
                  Partner With Us →
                </Button>
              </div>

              {/* Sidebar Contact & Details (inside scroll area so visible on any screen size) */}
              <div className="border-t border-ivory-sand pt-5 space-y-3">
                <div className="space-y-2 text-xs font-mono text-charcoal-light">
                  <a
                    href="tel:+919742225873"
                    className="flex items-center gap-2 hover:text-burgundy transition-colors"
                  >
                    <Phone size={13} className="text-burgundy shrink-0" />
                    <span>+91 97422 25873 / +91 82173 78963</span>
                  </a>
                  <a
                    href="mailto:contactus@raaksapphire.com"
                    className="flex items-center gap-2 hover:text-burgundy transition-colors truncate"
                  >
                    <Mail size={13} className="text-burgundy shrink-0" />
                    <span className="truncate">contactus@raaksapphire.com</span>
                  </a>
                  <div className="flex items-start gap-2 pt-1 text-[11px] text-charcoal-muted leading-tight">
                    <MapPin size={13} className="text-burgundy shrink-0 mt-0.5" />
                    <span>28, Service Rd, Bommanahalli, Bengaluru — 560068</span>
                  </div>
                </div>

                <div className="border-t border-ivory-sand pt-3 flex items-center justify-between text-[10px] font-mono text-charcoal-muted">
                  <span>ISO 9001:2015</span>
                  <span>•</span>
                  <span>Startup India DPIIT</span>
                  <span>•</span>
                  <span>NEP 2020</span>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Quick Action Bar at bottom */}
            <div className="shrink-0 p-4 border-t border-ivory-sand bg-white flex items-center justify-between gap-3">
              <Button
                to="/partner"
                variant="burgundy"
                size="sm"
                onClick={() => setBurgerOpen(false)}
                className="flex-1 font-mono text-xs uppercase tracking-wider font-bold py-2.5 text-center"
              >
                Partner With Us
              </Button>
              <button
                type="button"
                onClick={() => setBurgerOpen(false)}
                className="px-4 py-2.5 border border-ivory-sand bg-ivory text-xs font-mono uppercase tracking-wider text-charcoal hover:text-burgundy hover:border-burgundy transition-colors font-bold"
              >
                Close
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
