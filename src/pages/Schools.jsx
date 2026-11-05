import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import CountUp from '@/components/motion/CountUp'
import { schoolShowcase } from '@/content/schoolShowcase'
import { schoolStemCurriculum } from '@/content/universityCurricula'
import { GraduationCap, Award, Compass, Sparkles, CheckCircle2, School as SchoolIcon, Rocket, Cpu } from 'lucide-react'

export default function Schools() {
  return (
    <>
      {/* Header: Editorial Ivory with Burgundy typography */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-4 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            <SchoolIcon size={13} className="text-burgundy" /> K-12 & Higher Secondary Education
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-6">
            School Innovation Labs & STEAM Ecosystem
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8">
            Empowering schools, PU colleges, and young innovators across India with advanced robotics maker spaces, Atal Tinkering Labs (ATL), drone flight cages, and NEP 2020 experiential curricula.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button to="/partner?interest=Lab%20setup" variant="burgundy" size="md" className="font-bold">
              Setup a School Innovation Lab
            </Button>
            <Button to="/curriculum" variant="outline-burgundy" size="md" className="font-bold">
              Inspect Grade Progression
            </Button>
            <Button href="/brochure.pdf" variant="sand" size="md" className="font-bold">
              Download School Prospectus →
            </Button>
          </div>
        </div>
      </header>

      {/* School Impact Metrics */}
      <section className="bg-white border-b border-ivory-sand py-12">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-ivory-sand">
            {schoolShowcase.metrics.map(m => (
              <div key={m.label} className="text-center md:px-6">
                <CountUp target={m.value} suffix={m.suffix} className="font-serif text-4xl text-burgundy font-bold" />
                <div className="text-sm font-semibold text-charcoal mt-2">{m.label}</div>
                <div className="text-[11px] font-mono text-charcoal-muted mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 School Offerings */}
      <Section number="01" eyebrow="SCHOOL SOLUTIONS" title="Campus Facilities for Schools & PU Colleges" theme="ivory">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schoolShowcase.offerings.map((o, idx) => (
            <Reveal key={o.id} delay={idx * 0.1}>
              <div className="border border-ivory-sand bg-white p-8 hover:border-burgundy/60 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-ivory-sand">
                    <span className="font-mono text-xs uppercase tracking-wider text-gold-dark font-bold">Solution 0{idx + 1}</span>
                    <Badge variant="burgundy">School Level</Badge>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{o.title}</h3>
                  <p className="font-mono text-xs text-burgundy italic mb-4 font-semibold">{o.tagline}</p>
                  <p className="text-sm text-charcoal-light font-light leading-relaxed mb-6">{o.desc}</p>
                </div>
                <div className="border-t border-ivory-sand pt-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted block mb-3 font-semibold">School Deliverables</span>
                  <ul className="space-y-2">
                    {o.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-charcoal font-light">
                        <CheckCircle2 size={13} className="text-burgundy shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Grade-wise Curriculum Roadmap (Primary, Middle, High School) */}
      <Section number="02" eyebrow="NEP 2020 PEDAGOGY" title="Grade-Appropriate STEAM Progression" theme="sand"
        subtitle="Designed for seamless integration into CBSE, ICSE, and State Board academic timetables.">
        <div className="space-y-6">
          {schoolStemCurriculum.tiers.map((tier, idx) => (
            <Reveal key={tier.grade} delay={idx * 0.1}>
              <div className="bg-white border border-ivory-sand p-8 hover:border-burgundy/60 transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-ivory-sand">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-gold-dark font-bold">Stage 0{idx + 1}</span>
                    <h3 className="font-serif text-2xl text-charcoal mt-1">{tier.grade}</h3>
                  </div>
                  <div className="font-mono text-xs text-burgundy bg-burgundy-soft border border-burgundy/20 px-3.5 py-1 font-semibold self-start md:self-auto">
                    {tier.focus}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <span className="font-mono text-xs text-charcoal-muted uppercase tracking-wider block mb-2 font-semibold">Modules Covered</span>
                    <div className="flex flex-wrap gap-2">
                      {tier.modules.map(m => (
                        <span key={m} className="font-mono text-xs text-charcoal bg-ivory border border-ivory-sand px-2.5 py-1">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-charcoal-muted uppercase tracking-wider block mb-2 font-semibold">Hardware Kits & Prototyping</span>
                    <p className="text-xs text-charcoal font-mono bg-ivory p-3.5 border border-ivory-sand leading-relaxed">
                      {tier.hardware}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured School Showcases */}
      <Section number="03" eyebrow="CASE STUDIES" title="Partner Schools & PU Colleges" theme="white"
        subtitle="Institutions actively running RAAK Sapphire innovation centres.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schoolShowcase.featuredInstitutions.map((inst, idx) => (
            <Reveal key={inst.name} delay={idx * 0.1}>
              <div className="border border-ivory-sand bg-ivory p-8 hover:border-burgundy hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <Badge variant="gold" className="mb-3">{inst.type}</Badge>
                  <h3 className="font-serif text-2xl text-charcoal mb-1">{inst.name}</h3>
                  <p className="font-mono text-xs text-charcoal-muted mb-4">{inst.location}</p>
                  <p className="text-xs font-mono text-burgundy bg-white p-3 mb-4 border border-ivory-sand font-semibold">
                    {inst.facility}
                  </p>
                </div>
                <p className="text-xs text-charcoal-light font-light leading-relaxed border-t border-ivory-sand pt-3">
                  {inst.impact}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* School CTA in Burgundy */}
      <section className="bg-burgundy py-20 text-white border-t-4 border-gold">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Bring an Innovation Centre to Your School
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-sm md:text-base">
            Equip your students with coding, robotics and drone skills early. We handle the complete setup, teacher training, and annual competition roadmap.
          </p>
          <Button to="/partner?interest=Lab%20setup" variant="gold" size="lg" className="font-bold">
            Schedule a School Lab Consultation →
          </Button>
        </div>
      </section>
    </>
  )
}
