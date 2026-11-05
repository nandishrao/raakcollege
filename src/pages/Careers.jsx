import { Link } from 'react-router-dom'
import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import { pillars, learningJourney, careerRoles } from '@/content/careers'
import { ArrowRight, CheckCircle2, Briefcase, Compass, Hammer, Rocket } from 'lucide-react'

export default function Careers() {
  const journeyIcons = [Compass, Hammer, Rocket]

  return (
    <>
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            <Briefcase size={13} className="text-burgundy" /> Placement, Internship & Innovation Ecosystem
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-4">
            Shaping India's Future Together Through Skills, Education & Innovation
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl mb-4">
            A comprehensive tri-fold ecosystem providing our students with experiential research incubation, direct corporate internships, and end-to-end placement readiness.
          </p>
          <div className="inline-block font-mono text-xs text-gold-dark font-bold uppercase tracking-wider bg-white border border-ivory-sand px-3 py-1.5 shadow-2xs">
            Empower Students · Elevate Institutions
          </div>
        </div>
      </header>

      {/* Institutional Charter Quote */}
      <section className="bg-white border-b border-ivory-sand py-12">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <div className="border-l-4 border-burgundy pl-6 py-2 max-w-3xl">
            <p className="font-serif text-xl sm:text-2xl text-charcoal italic leading-relaxed mb-2">
              "India's future depends on future-ready skills, practical education, and real industry exposure. This partnership makes that future possible."
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-bold">
              RAAK Sapphire Institutional Charter
            </span>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars from Brochure */}
      <Section number="01" eyebrow="ECOSYSTEM FRAMEWORK" title="Three Strategic Pathways" theme="ivory">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div className="border border-ivory-sand bg-white p-8 flex flex-col justify-between h-full hover:border-burgundy transition-all duration-300 shadow-sm">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-3 font-bold">
                    PILLAR {p.n}
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{p.title}</h3>
                  <p className="font-mono text-xs text-burgundy italic mb-4 font-semibold">{p.tagline}</p>
                  <p className="text-sm text-charcoal-light font-light leading-relaxed mb-6">{p.desc}</p>
                </div>

                <div className="border-t border-ivory-sand pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] text-charcoal bg-ivory border border-ivory-sand px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Learning Journey from Brochure Page 4 */}
      <Section number="02" eyebrow="LEARNING JOURNEY" title="The Three-Stage Engineering Progression" theme="sand"
        subtitle="How students advance from initial discovery to live production deployment and aerospace flight.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {learningJourney.map((j, idx) => {
            const Icon = journeyIcons[idx]
            return (
              <Reveal key={j.step} delay={idx * 0.1}>
                <div className="bg-white border border-ivory-sand p-8 h-full flex flex-col justify-between hover:border-burgundy transition-all shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-ivory-sand">
                      <span className="font-mono text-xs text-burgundy font-bold">STAGE {j.step}</span>
                      <Icon size={18} className="text-gold-dark" />
                    </div>
                    <div className="font-mono text-xs text-gold-dark font-bold uppercase tracking-wider mb-1">{j.action}</div>
                    <h3 className="font-serif text-2xl text-charcoal mb-3">{j.phase}</h3>
                    <p className="text-sm text-charcoal-light font-light leading-relaxed">{j.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-ivory-sand/60 flex items-center gap-2 font-mono text-[11px] text-burgundy font-bold uppercase">
                    Step {j.step} of 03 <ArrowRight size={12} />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Student CTA in Deep Burgundy */}
      <section className="bg-burgundy text-white py-16 border-t-4 border-gold">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <div className="bg-white text-charcoal p-8 md:p-14 text-center max-w-3xl mx-auto shadow-xl border border-ivory-sand">
            <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-3 font-bold">Student Opportunities</div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Looking for an Internship with RAAK Sapphire?
            </h2>
            <p className="text-charcoal-light font-light leading-relaxed text-sm md:text-base mb-8 max-w-xl mx-auto">
              We recruit top student engineers from our partner colleges for real-world projects in drone avionics, AI agent pipelines, and industrial robotics.
            </p>
            <Button to="/partner?interest=Internship%20enquiry" variant="burgundy" size="lg" className="font-bold">
              Submit Student Internship Application →
            </Button>
          </div>
        </div>
      </section>

      {/* Career Roles Spectrum */}
      <Section number="03" eyebrow="CAREER PATHWAYS" title="Roles Our Graduates Step Into" theme="white"
        subtitle="A sample spectrum of modern technical roles targeted by our curriculum modules.">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {careerRoles.map((r, i) => (
            <Reveal key={r} delay={i * 0.05}>
              <div className="border border-ivory-sand bg-ivory p-5 hover:border-burgundy transition-colors shadow-sm">
                <div className="w-2 h-2 bg-burgundy rounded-full mb-3" />
                <h4 className="font-serif text-lg text-charcoal">{r}</h4>
                <span className="font-mono text-[11px] text-charcoal-muted block mt-1">High Demand Profile</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
