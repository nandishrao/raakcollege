import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/content/site'

export default function About() {
  return (
    <>
      {/* Header */}
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">About Us</div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-6">
            Future-Focused Technology & Education
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {siteConfig.about.description}
          </p>
        </div>
      </header>

      {/* Mission & Vision */}
      <Section number="01" eyebrow="PURPOSE" title="Mission & Vision" theme="ivory">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <div className="border-l-4 border-burgundy pl-6 bg-white p-6 border border-ivory-sand shadow-sm">
              <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-3 font-bold">Mission</div>
              <p className="font-serif text-xl text-charcoal leading-relaxed">{siteConfig.about.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-l-4 border-gold pl-6 bg-white p-6 border border-ivory-sand shadow-sm">
              <div className="font-mono text-xs uppercase tracking-wider text-gold-dark mb-3 font-bold">Vision</div>
              <p className="font-serif text-xl text-charcoal leading-relaxed">{siteConfig.about.vision}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Leadership */}
      <Section number="02" eyebrow="LEADERSHIP" title="Run by Navodayan Alumni & IITians" theme="white"
        subtitle="India's premier academic background applied to solving the nation's technology education gap.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Academic Rigour", desc: "Grounded in IIT-quality academic thinking applied to practical emerging-technology pedagogy." },
            { label: "Navodayan Legacy", desc: "Graduates of the Navodaya Vidyalaya system — built with the ethos of accessibility, excellence and social impact." },
            { label: "Industry-First", desc: "Every curriculum decision is driven by verifiable industry hiring data and technological market movements." },
          ].map((i, idx) => (
            <Reveal key={i.label} delay={idx * 0.1}>
              <div className="bg-ivory border border-ivory-sand p-8 hover:border-burgundy transition-colors h-full shadow-sm">
                <div className="w-2 h-2 bg-burgundy rounded-full mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">{i.label}</h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sub-brands */}
      <Section number="03" eyebrow="ACADEMIC ECOSYSTEM" title="Our Educational Ecosystem" theme="sand"
        subtitle="Three complementary entities serving schools, higher education institutions, and community innovators.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal>
            <div className="border border-ivory-sand bg-white p-8 hover:border-burgundy transition-all hover:-translate-y-1 duration-300 h-full flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-2 font-bold">Brand 01</div>
                <h3 className="font-serif text-2xl text-charcoal mb-1">RAAK Sapphire</h3>
                <p className="font-mono text-xs text-gold-dark mb-4 font-semibold">Centre of Excellence · DaaS</p>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  The flagship institution-facing platform delivering Department-as-a-Service frameworks, degree programmes, certifications and lab setup for colleges and universities.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-ivory-sand bg-white p-8 hover:border-burgundy transition-all hover:-translate-y-1 duration-300 h-full flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-2 font-bold">Brand 02</div>
                <h3 className="font-serif text-2xl text-charcoal mb-1">ROSBOTZ</h3>
                <p className="font-mono text-xs text-gold-dark mb-4 font-semibold">Build · Code · Fly</p>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Next-generation robotics and drone education kits, modular hardware, and flight simulation testbeds for practical lab deployment in schools and colleges.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border border-ivory-sand bg-white p-8 hover:border-burgundy transition-all hover:-translate-y-1 duration-300 h-full flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-2 font-bold">Brand 03</div>
                <h3 className="font-serif text-2xl text-charcoal mb-1">STEAM IT Foundation</h3>
                <p className="font-mono text-xs text-gold-dark mb-4 font-semibold">Experiential STEAM for All</p>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Non-profit initiative promoting grassroots innovation, school-level robotics hackathons and experiential STEAM pedagogy aligned with NEP 2020.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* NEP 2020 Section in Deep Burgundy */}
      <section className="bg-burgundy text-white py-20 border-t-4 border-gold">
        <div className="mx-auto max-w-academic px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-gold-soft mb-3 font-bold">NEP 2020 Alignment</div>
            <h2 className="font-serif text-3xl md:text-4xl text-white max-w-xl">
              Designed for India's National Education Policy
            </h2>
            <p className="mt-4 max-w-xl text-white/80 font-light leading-relaxed text-sm md:text-base">
              Every programme, certification, and school lab framework has been structured to fulfill NEP 2020 mandates — emphasizing multidisciplinary learning, practical robotics, and lifelong skill credentials.
            </p>
          </div>
          <Button to="/partner" variant="gold" size="lg" className="shrink-0 font-bold">
            Partner With Us →
          </Button>
        </div>
      </section>
    </>
  )
}
