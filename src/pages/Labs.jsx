import { useState } from 'react'
import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import { labs } from '@/content/labs'
import { Cpu, Server, Bot, Cloud, Compass, Code, Plane } from 'lucide-react'

const labIcons = {
  "01": Cpu,
  "02": Server,
  "03": Bot,
  "04": Cloud,
  "05": Compass,
  "06": Code,
  "07": Plane,
}

export default function Labs() {
  return (
    <>
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            Academic Infrastructure
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-4">
            Centre of Excellence Laboratories
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Seven advanced technical laboratories installed and managed directly on campus under the RAAK Sapphire Department-as-a-Service model.
          </p>
        </div>
      </header>

      {/* Lab Gallery */}
      <Section number="01" eyebrow="CAMPUS FACILITIES" title="Seven Advanced Technical Labs" theme="ivory"
        subtitle="Advanced hardware, computing nodes, sensor test benches, and indoor flight cages.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((l, i) => {
            const Icon = labIcons[l.id] || Cpu
            return (
              <Reveal key={l.id} delay={i * 0.08}>
                <div className="group border border-ivory-sand bg-white overflow-hidden hover:border-burgundy transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full shadow-sm">
                  {/* Visual Header / Optional Image with robust fallback */}
                  <div className="relative h-48 w-full overflow-hidden bg-burgundy-soft border-b border-ivory-sand flex items-center justify-center">
                    <img
                      src={l.img}
                      alt={l.alt}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="relative z-10 flex flex-col items-center text-center p-4">
                      <Icon size={36} className="text-burgundy mb-2" />
                      <span className="font-mono text-xs text-charcoal font-bold uppercase tracking-wider">Lab Facility {l.id}</span>
                    </div>
                    <div className="absolute top-3 left-3 z-20 font-mono text-xs text-burgundy bg-white px-2.5 py-0.5 font-bold shadow-sm border border-burgundy/20">
                      LAB {l.id}
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal mb-1 group-hover:text-burgundy transition-colors">
                        {l.name}
                      </h3>
                      <p className="font-mono text-xs text-burgundy mb-3 italic font-semibold">{l.focus}</p>
                      <p className="text-xs text-charcoal-light font-light leading-relaxed mb-6">{l.desc}</p>
                    </div>

                    <div className="border-t border-ivory-sand pt-4">
                      <span className="font-mono text-[11px] text-charcoal-muted uppercase tracking-wider block mb-2 font-semibold">Lab Standard</span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="font-mono text-[10px] text-charcoal bg-ivory border border-ivory-sand px-2.5 py-1 font-medium">Industry 4.0 Standard</span>
                        <span className="font-mono text-[10px] text-charcoal bg-ivory border border-ivory-sand px-2.5 py-1 font-medium">DGCA / VTU Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Lab Consultation CTA */}
      <section className="bg-burgundy border-t-4 border-gold py-20 text-white">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Install a Centre of Excellence on Your Campus</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-base">
            From lab layout architecture and power-grid specifications to equipment procurement and student workbenches.
          </p>
          <Button to="/partner?interest=Lab%20setup" variant="gold" size="lg" className="font-bold">
            Request Lab Architecture Blueprint →
          </Button>
        </div>
      </section>
    </>
  )
}
