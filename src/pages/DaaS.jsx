import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import { daasSteps, whyChoose } from '@/content/daas'
import { Layers } from 'lucide-react'

export default function DaaS() {
  return (
    <>
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            <Layers size={13} className="text-burgundy" /> Institutional Partnership Model
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-4">
            Department-as-a-Service Framework
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl">
            A complete institutional academic model that installs an industry-aligned AI, Robotics and Drone Department inside your institution — from syllabus to placements.
          </p>
          <div className="mt-4 font-mono text-xs text-burgundy uppercase tracking-wider font-bold">
            For Schools, Bangalore University & VTU Colleges
          </div>
        </div>
      </header>

      {/* Pull Quote */}
      <section className="bg-white border-b border-ivory-sand py-16">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <Reveal>
            <div className="flex gap-4 items-start max-w-4xl">
              <span className="font-serif text-6xl text-burgundy/30 leading-none">"</span>
              <div>
                <blockquote className="font-serif text-xl sm:text-2xl text-charcoal leading-relaxed mb-4">
                  India's future depends on future-ready skills, practical education and real industry exposure. This partnership makes that future possible.
                </blockquote>
                <div className="font-mono text-xs text-gold-dark uppercase tracking-wider font-bold">
                  RAAK Sapphire Institutional Charter
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5-Step DaaS Roadmap */}
      <Section number="01" eyebrow="5-STEP ROADMAP" title="End-to-End Implementation" theme="ivory">
        <div className="space-y-6">
          {daasSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="border border-ivory-sand bg-white p-8 hover:border-burgundy transition-all duration-300 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-burgundy tracking-wider font-bold">{s.step}</span>
                    <h3 className="font-serif text-2xl text-charcoal">{s.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-gold-dark font-semibold">{s.timeline}</span>
                </div>
                <p className="font-mono text-xs text-burgundy italic mb-4 font-semibold">{s.tagline}</p>
                <p className="text-charcoal-light font-light leading-relaxed text-sm md:text-base">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8 Institutional Pillars */}
      <Section number="02" eyebrow="INSTITUTIONAL VALUE" title="Eight Core DaaS Deliverables" theme="sand"
        subtitle="Every element required to operate a globally benchmarked technology department.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((w, idx) => (
            <Reveal key={w.title} delay={idx * 0.05}>
              <div className="border border-ivory-sand bg-white p-6 hover:border-burgundy hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <span className="font-mono text-xs text-gold-dark font-bold block mb-2">0{idx + 1}</span>
                <h3 className="font-serif text-xl text-charcoal mb-2">{w.title}</h3>
                <p className="text-xs text-charcoal-light font-light leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bottom CTA in Burgundy */}
      <section className="bg-burgundy py-20 text-white border-t-4 border-gold">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Transform Your Institution into an Innovation Hub
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-base">
            Join visionary schools, Bangalore University and VTU affiliated colleges across India already deploying the RAAK Sapphire DaaS model.
          </p>
          <Button to="/partner?interest=Comprehensive%20DaaS%20partnership" variant="gold" size="lg" className="font-bold">
            Begin Institutional Partnership Discussion →
          </Button>
        </div>
      </section>
    </>
  )
}
