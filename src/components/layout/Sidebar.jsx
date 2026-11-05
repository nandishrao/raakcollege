import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Info,
  School,
  GraduationCap,
  BookOpen,
  Award,
  Layers,
  Cpu,
  Briefcase,
  ShieldCheck,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react'
import { siteConfig } from '@/content/site'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navGroups = [
  {
    title: "INSTITUTION",
    links: [
      { href: "/", label: "Overview & Home", icon: Home },
      { href: "/about", label: "About & Leadership", icon: Info },
    ]
  },
  {
    title: "ACADEMIC SCHEMES",
    links: [
      { href: "/schools", label: "Schools & STEAM (K-12)", icon: School, badge: "ATL Labs" },
      { href: "/curriculum", label: "VTU & BU Curricula", icon: BookOpen, badge: "NEP 2020" },
      { href: "/programmes", label: "Degree Programmes", icon: GraduationCap },
      { href: "/certifications", label: "Industry Certifications", icon: Award },
    ]
  },
  {
    title: "CAMPUS INFRASTRUCTURE",
    links: [
      { href: "/daas", label: "DaaS Model", icon: Layers },
      { href: "/labs", label: "Centre of Excellence Labs", icon: Cpu, badge: "7 Labs" },
      { href: "/careers-ecosystem", label: "Placements & Internships", icon: Briefcase },
      { href: "/recognition", label: "Accreditation & Partners", icon: ShieldCheck },
    ]
  }
]

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const renderNavContent = () => (
    <div className="flex flex-col h-full justify-between">
      {/* Top Header / Logo */}
      <div>
        <div className="p-6 border-b border-ivory-sand bg-white">
          <Link to="/" className="block focus-visible:outline-none">
            <img
              src="/logo.png"
              alt="RAAK Sapphire"
              className="h-11 w-auto object-contain"
            />
          </Link>
          <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-burgundy font-bold">
            <Award size={13} className="text-gold shrink-0" />
            <span>Run by Navodayan Alumni & IITians</span>
          </div>
          <p className="font-mono text-[10px] text-charcoal-muted mt-1 leading-tight">
            Schools (K-12/ATL) · Bangalore Univ (BU) · VTU Colleges
          </p>
        </div>

        {/* Navigation Groups */}
        <div className="px-4 py-5 space-y-6 overflow-y-auto max-h-[calc(100vh-320px)] custom-scrollbar">
          {navGroups.map((group) => (
            <div key={group.title}>
              <div className="px-3 mb-2 font-mono text-[10px] uppercase tracking-wider text-charcoal-muted font-bold">
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
                      className={cn(
                        'flex items-center justify-between px-3 py-2 text-xs font-medium transition-all duration-200 border-l-2 focus-visible:outline-none',
                        active
                          ? 'bg-burgundy text-white border-gold font-bold shadow-sm'
                          : 'text-charcoal hover:text-burgundy hover:bg-sand/60 border-transparent'
                      )}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon size={15} className={active ? 'text-gold' : 'text-burgundy shrink-0'} />
                        <span className="truncate">{link.label}</span>
                      </div>
                      {link.badge && (
                        <span className={cn(
                          'font-mono text-[9px] uppercase px-1.5 py-0.5 font-bold shrink-0',
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
        </div>
      </div>

      {/* Bottom Sticky Card / CTA & Contact */}
      <div className="p-4 border-t border-ivory-sand bg-sand/40">
        <div className="bg-white p-3.5 border border-ivory-sand mb-3 shadow-sm">
          <div className="font-mono text-[10px] uppercase text-gold-dark font-bold mb-1 flex items-center gap-1">
            <Sparkles size={11} className="text-burgundy" /> DaaS Partnership
          </div>
          <p className="text-[11px] text-charcoal-light font-light leading-snug mb-3">
            Commission an AI, Robotics & Drone Centre of Excellence on your campus.
          </p>
          <Button
            to="/partner"
            variant="burgundy"
            size="sm"
            className="w-full font-mono text-xs uppercase tracking-wider font-bold py-2"
          >
            Partner With Us →
          </Button>
        </div>

        {/* Quick Contact Snippet */}
        <div className="space-y-1.5 text-[11px] font-mono text-charcoal-light px-1">
          <a
            href="tel:+919742225873"
            className="flex items-center gap-2 hover:text-burgundy transition-colors"
          >
            <Phone size={12} className="text-burgundy shrink-0" />
            <span>+91 97422 25873</span>
          </a>
          <a
            href="mailto:contactus@raaksapphire.com"
            className="flex items-center gap-2 hover:text-burgundy transition-colors truncate"
          >
            <Mail size={12} className="text-burgundy shrink-0" />
            <span className="truncate">contactus@raaksapphire.com</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* ── Desktop Fixed Sidebar (lg and above) ───────────────────────────── */}
      <aside
        className="hidden lg:flex fixed top-0 bottom-0 left-0 w-72 xl:w-80 bg-ivory border-r border-ivory-sand z-40 flex-col overflow-hidden shadow-sm"
        aria-label="Academic Navigation Sidebar"
      >
        {renderNavContent()}
      </aside>

      {/* ── Mobile & Tablet Sticky Topbar ─────────────────────────────────── */}
      <header className="lg:hidden sticky top-0 inset-x-0 z-40 bg-white border-b border-ivory-sand shadow-sm">
        {/* Top institutional strip */}
        <div className="bg-burgundy text-white px-4 py-1.5 text-[11px] font-mono flex items-center justify-between">
          <span className="flex items-center gap-1 text-gold-soft font-medium truncate">
            <Award size={12} className="text-gold shrink-0" /> Run by Navodayan Alumni & BNI Members
          </span>
          <a href="tel:+919742225873" className="hover:text-gold shrink-0 ml-2">
            +91 97422 25873
          </a>
        </div>

        {/* Main top bar */}
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="RAAK Sapphire" className="h-9 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <Button
              to="/partner"
              variant="burgundy"
              size="sm"
              className="font-mono text-xs font-bold py-1.5 px-3"
            >
              Partner
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Sidebar"
              className="p-2 border border-ivory-sand bg-ivory text-charcoal hover:text-burgundy hover:border-burgundy focus-visible:outline-none"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Sidebar Drawer (Slide-out from Left) ────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm animate-fadeIn"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-ivory border-r border-ivory-sand shadow-2xl flex flex-col z-50 animate-slideRight">
            <div className="p-4 border-b border-ivory-sand bg-white flex items-center justify-between">
              <img src="/logo.png" alt="RAAK Sapphire" className="h-8 w-auto object-contain" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-charcoal hover:text-burgundy"
                aria-label="Close Sidebar"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {renderNavContent()}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

