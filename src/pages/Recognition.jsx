import { useState } from 'react'
import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import { accreditations, awards, colleges, techPartners } from '@/content/partners'
import { X, Award, ExternalLink, ShieldCheck } from 'lucide-react'

export default function Recognition() {
  const [selectedAward, setSelectedAward] = useState(null)

  return (
    <>
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            <ShieldCheck size={13} className="text-burgundy" /> Credentials & Trust
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-4">
            Recognition, Accreditation & Partners
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Certified and accredited by national and international governing bodies, trusted by leading higher education colleges across India.
          </p>
        </div>
      </header>

      {/* Accreditations Grid */}
      <Section number="01" eyebrow="GOVERNMENT & GLOBAL ACCREDITATIONS" title="Certified & Registered Bodies" theme="ivory">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06}>
              <div className="border border-ivory-sand bg-white p-6 hover:border-burgundy hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 border border-burgundy bg-burgundy-soft flex items-center justify-center font-mono text-xs text-burgundy mb-4">
                    <Award size={18} />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-1">{a.name}</h3>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-burgundy mb-3 font-semibold">{a.category}</div>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Awards Section */}
      <Section number="02" eyebrow="HONOURS & AWARDS" title="Institutional Accolades" theme="sand"
        subtitle="National recognitions awarded to our founders, curriculum and educational impact initiatives.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((aw, i) => (
            <Reveal key={aw.id} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setSelectedAward(aw)}
                className="w-full text-left border border-gold/40 bg-white p-6 hover:border-gold hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-gold-dark font-bold">{aw.year}</span>
                    <span className="font-mono text-[10px] text-charcoal-muted uppercase">{aw.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-2 leading-snug">{aw.title}</h3>
                  <p className="font-mono text-xs text-burgundy mb-3 font-semibold">{aw.presenter}</p>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed">{aw.desc}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-gold-dark font-bold hover:underline">
                  Inspect Citation Details <ExternalLink size={11} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Colleges Grid */}
      <Section number="03" eyebrow="INSTITUTIONAL PARTNERS" title="Higher Education Institutions" theme="white"
        subtitle="A selection of university departments and autonomous colleges where RAAK Sapphire programmes operate.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="border border-ivory-sand bg-ivory p-6 hover:border-burgundy transition-colors shadow-sm">
                <span className="font-mono text-xs text-gold-dark font-semibold block mb-1">{c.location}</span>
                <h4 className="font-serif text-xl text-charcoal mb-1">{c.name}</h4>
                <p className="font-mono text-xs text-charcoal-muted">{c.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tech Partners */}
      <Section number="04" eyebrow="TECHNOLOGY ECOSYSTEM" title="Industry & Technology Alliances" theme="sand">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {techPartners.map((tp, i) => (
            <div key={tp.name} className="border border-ivory-sand bg-white p-4 text-center hover:border-burgundy transition-colors shadow-sm">
              <span className="font-mono text-xs text-charcoal font-semibold block">{tp.name}</span>
              <span className="font-mono text-[10px] text-charcoal-muted mt-0.5 block">{tp.tier}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Award Lightbox Dialog */}
      {selectedAward && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="bg-white border-2 border-gold max-w-lg w-full p-8 relative shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 p-2 text-charcoal hover:text-burgundy"
            >
              <X size={20} />
            </button>
            <div className="font-mono text-xs uppercase tracking-wider text-gold-dark font-bold mb-2">
              Award Citation · {selectedAward.year}
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-2">{selectedAward.title}</h3>
            <p className="font-mono text-xs text-burgundy mb-4 font-semibold">Conferred by: {selectedAward.presenter}</p>
            <p className="text-sm text-charcoal-light font-light leading-relaxed mb-6">{selectedAward.desc}</p>
            <div className="border-t border-ivory-sand pt-4 flex justify-between items-center text-xs font-mono text-charcoal-muted">
              <span>Category: {selectedAward.category}</span>
              <span className="text-gold-dark font-bold">RAAK Sapphire Archive</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
