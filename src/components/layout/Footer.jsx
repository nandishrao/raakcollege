import { Link } from 'react-router-dom'
import { siteConfig } from '@/content/site'
import { Phone, Mail, Globe, ArrowUpRight, MapPin, Award } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t-4 border-gold">
      {/* Institutional statement bar */}
      <div className="mx-auto max-w-academic px-6 md:px-12 pb-12 border-b border-white/15">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-eyebrow text-gold font-bold mb-2">
              Institutional Pledge
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white max-w-3xl leading-snug">
              "India's future depends on future-ready skills, practical education and real industry exposure. This partnership makes that future possible."
            </h2>
          </div>
          <div className="shrink-0 flex items-center gap-3.5 flex-wrap">
            <div className="bg-white p-3 border border-gold/40 shadow-md">
              <img src="/logo.png" alt="RAAK Sapphire" className="h-12 w-auto object-contain" />
            </div>
            <div className="bg-white p-2 border border-gold/40 shadow-md flex items-center justify-center" title="VTU Engineering Academic Alignment">
              <img src="/vtu-logo.png" alt="Visvesvaraya Technological University" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
            </div>
            <div className="bg-white p-2 border border-gold/40 shadow-md flex items-center justify-center" title="Bangalore University NEP 2020 Model Curriculum">
              <img src="/bu-logo.png" alt="Bangalore University" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-ivory-sand">
          <span className="text-gold font-semibold">{siteConfig.leadership}</span>
          <span>·</span>
          <span>{siteConfig.tagline}</span>
          <span>·</span>
          <span>{siteConfig.targetInstitutions}</span>
        </div>
      </div>

      {/* 4-col directory */}
      <div className="mx-auto max-w-academic px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/15">
        {/* Headquarters */}
        <div>
          <div className="font-mono text-xs uppercase tracking-eyebrow text-gold font-bold mb-4">
            Headquarters
          </div>
          <p className="text-sm font-light text-ivory-sand leading-relaxed mb-4">
            {siteConfig.contact.address.street}, {siteConfig.contact.address.area}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.pincode}
          </p>
          <div className="space-y-2 text-xs font-mono text-ivory-sand">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-gold shrink-0" />
              <span>{siteConfig.contact.phones.join(' / ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-gold shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold transition-colors">{siteConfig.contact.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={13} className="text-gold shrink-0" />
              <a href={siteConfig.contact.website} className="hover:text-gold transition-colors">www.raaksapphire.com</a>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 mt-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-gold font-bold mb-2">Follow Us</div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-ivory-sand">
              <a href={siteConfig.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
              <span>·</span>
              <a href={siteConfig.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
              <span>·</span>
              <a href={siteConfig.contact.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">YouTube</a>
              <span>·</span>
              <a href={siteConfig.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        {/* Pan-India Hubs */}
        <div>
          <div className="font-mono text-xs uppercase tracking-eyebrow text-gold font-bold mb-4">
            Pan-India Hubs
          </div>
          <ul className="space-y-3 text-xs">
            {siteConfig.contact.branches.map(b => (
              <li key={b} className="border-l-2 border-gold pl-3">
                <div className="font-semibold text-white">{b} Hub</div>
                <div className="text-ivory-sand/80 font-mono text-[11px]">Regional Academic Operations</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Ecosystem */}
        <div>
          <div className="font-mono text-xs uppercase tracking-eyebrow text-gold font-bold mb-4">
            Academic Ecosystem
          </div>
          {siteConfig.subBrands.map(sb => (
            <div key={sb.name} className="bg-charcoal-dark p-3.5 border border-white/10 mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif font-semibold text-sm text-white">{sb.name}</span>
                <span className="font-mono text-[10px] text-gold uppercase font-bold">{sb.motto}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div>
          <div className="font-mono text-xs uppercase tracking-eyebrow text-gold font-bold mb-4">
            Academic Directory
          </div>
          <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-ivory-sand">
            {siteConfig.navLinks.map(l => (
              <li key={l.href}>
                <Link to={l.href} className="hover:text-gold flex items-center justify-between group py-0.5 transition-colors">
                  <span>{l.label}</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/partner" className="text-gold font-bold hover:text-gold-soft flex items-center justify-between">
                <span>Partner With Us</span>
                <ArrowUpRight size={12} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-academic px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory-sand/70">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span>ISO 9001:2015</span>·<span>STEM.org Accredited</span>·<span>Startup India DPIIT</span>·<span>NEP 2020 Aligned</span>
        </div>
      </div>
    </footer>
  )
}
