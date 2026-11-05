import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import { certifications, certCareerRoles } from '@/content/certifications'
import { Award } from 'lucide-react'

export default function Certifications() {
  return (
    <>
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            <Award size={13} className="text-burgundy" /> Industry Certifications
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-4">
            Eight Specialised Certification Programmes
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Modular certification tracks providing globally verifiable credentials across robotics, AI, drones, IoT and more — deployable as standalone upskilling courses or integrated into university degrees.
          </p>
        </div>
      </header>

      {/* 8 Certifications Grid */}
      <Section number="01" eyebrow="CERTIFICATIONS" title="Certification Programme Directory" theme="ivory">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.07}>
              <div className="border border-ivory-sand bg-white hover:border-burgundy hover:-translate-y-1 hover:shadow-lg transition-all duration-300 p-7 flex flex-col h-full shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-ivory-sand">
                  <span className="font-mono text-xs tracking-wider text-burgundy font-bold">{c.id}</span>
                  <span className="font-mono text-[10px] text-charcoal-muted uppercase tracking-wider font-semibold">Certification</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-1">{c.title}</h3>
                <p className="font-mono text-xs text-burgundy italic mb-3 font-semibold">{c.tagline}</p>
                <p className="text-xs text-charcoal-light font-light leading-relaxed flex-1 mb-5">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 border-t border-ivory-sand pt-3">
                  {c.careers.map(role => (
                    <span key={role} className="font-mono text-[10px] text-charcoal bg-ivory border border-ivory-sand px-2 py-0.5">{role}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Career Pathways */}
      <Section number="02" eyebrow="CAREER READINESS" title="Target Job Roles" theme="sand"
        subtitle="Each certification aligns directly with high-growth technology hiring profiles.">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {certCareerRoles.map((role, idx) => (
            <div key={role} className="bg-white border border-ivory-sand p-4 text-center hover:border-burgundy transition-colors shadow-sm">
              <span className="font-mono text-xs text-gold-dark font-bold block mb-1">Role 0{idx + 1}</span>
              <span className="text-sm font-serif text-charcoal">{role}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Institutional Inquiry CTA */}
      <section className="bg-burgundy py-16 text-white border-t-4 border-gold">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Integrate Certifications into Your Curriculum</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-sm md:text-base">
            Offered as value-add semester modules or vacation fast-tracks with industry assessment.
          </p>
          <Button to="/partner?interest=Certification%20programmes" variant="gold" size="lg" className="font-bold">
            Request Certification Syllabi →
          </Button>
        </div>
      </section>
    </>
  )
}
