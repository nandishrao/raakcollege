import { Link } from 'react-router-dom'
import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { programmes } from '@/content/programmes'
import { ArrowRight, GraduationCap } from 'lucide-react'

// Compare table
function CompareTable() {
  const rows = [
    { label: "Degree Level", fn: p => p.degree },
    { label: "Duration", fn: p => p.duration },
    { label: "Practical Ratio", fn: () => "70% Hands-On" },
    { label: "Core Academic Focus", fn: p => p.slug.includes('drone') ? "Aerial Robotics, UAV Avionics & Autonomous Flight" : "Cognitive AI, Deep Learning & Intelligent Physical Systems" },
    { label: "Sample Careers", fn: p => p.careers.slice(0, 3).join(', ') },
  ]
  return (
    <div className="overflow-x-auto bg-white border border-ivory-sand shadow-sm p-6">
      <table className="w-full min-w-[720px] text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-ivory-sand">
            <th className="py-4 pr-6 font-mono text-xs uppercase tracking-wider text-burgundy font-bold w-1/5">Criterion</th>
            {programmes.map(p => (
              <th key={p.slug} className="py-4 px-4 w-1/4">
                <div className="font-mono text-[10px] text-gold-dark uppercase tracking-wider mb-1 font-semibold">{p.degree}</div>
                <div className="font-serif text-lg text-charcoal leading-snug">{p.shortTitle}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ivory-sand">
          {rows.map(r => (
            <tr key={r.label} className="hover:bg-ivory/60 transition-colors">
              <td className="py-4 pr-6 font-mono text-xs uppercase tracking-wider text-charcoal-muted font-medium">{r.label}</td>
              {programmes.map(p => (
                <td key={p.slug} className="py-4 px-4 text-charcoal font-light leading-relaxed">{r.fn(p)}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="py-5" />
            {programmes.map(p => (
              <td key={p.slug} className="py-5 px-4">
                <Link to={`/programmes/${p.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-burgundy hover:underline font-bold">
                  View Syllabus <ArrowRight size={12} />
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default function Programmes() {
  const btech = programmes.filter(p => p.degree === 'B.Tech')
  const bca   = programmes.filter(p => p.degree === 'BCA')

  return (
    <>
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            <GraduationCap size={13} className="text-burgundy" /> Degree Programmes
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-4">
            AI, Robotics & Drone Academic Programmes
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Four industry-aligned degree specialisations — two B.Tech tracks and two BCA tracks — delivered through the RAAK Sapphire DaaS framework for VTU and Bangalore University colleges.
          </p>
        </div>
      </header>

      {/* B.Tech */}
      <Section number="01" eyebrow="ENGINEERING DEGREES" title="B.Tech Programmes (VTU Mapped)" theme="ivory">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {btech.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link to={`/programmes/${p.slug}`}
                className="group block border border-ivory-sand bg-white hover:border-burgundy hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="/vtu-logo.png"
                      alt="VTU"
                      className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                    />
                    <Badge variant="burgundy">VTU Scheme · {p.duration}</Badge>
                  </div>
                  <span className="font-mono text-[11px] text-charcoal-muted font-semibold">160 Credits CBCS</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-burgundy transition-colors leading-snug">{p.shortTitle}</h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed mb-6">{p.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.careers.map(c => (
                    <span key={c} className="font-mono text-[10px] text-charcoal bg-ivory border border-ivory-sand px-2.5 py-1">{c}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-burgundy uppercase tracking-wider font-bold">
                  Explore Full Curriculum <ArrowRight size={13} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BCA */}
      <Section number="02" eyebrow="COMPUTER APPLICATIONS" title="BCA Programmes (Bangalore University Mapped)" theme="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bca.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link to={`/programmes/${p.slug}`}
                className="group block border border-ivory-sand bg-ivory hover:border-gold-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="/bu-logo.png"
                      alt="Bangalore University"
                      className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                    />
                    <Badge variant="gold">BU NEP 2020 · {p.duration}</Badge>
                  </div>
                  <span className="font-mono text-[11px] text-charcoal-muted font-semibold">KSHEC Model</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-gold-dark transition-colors leading-snug">{p.shortTitle}</h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed mb-6">{p.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.careers.map(c => (
                    <span key={c} className="font-mono text-[10px] text-charcoal bg-white border border-ivory-sand px-2.5 py-1">{c}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-gold-dark uppercase tracking-wider font-bold">
                  Explore Full Curriculum <ArrowRight size={13} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Compare Table */}
      <Section number="03" eyebrow="CURRICULUM COMPARISON" title="Compare All Four Tracks" theme="sand"
        subtitle="Side-by-side matrix across key academic and laboratory criteria.">
        <CompareTable />
      </Section>

      {/* CTA in Burgundy */}
      <section className="bg-burgundy text-white py-20 border-t-4 border-gold">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Offer These Programmes at Your College?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-base">
            We provide full Board of Studies documentation, credit structure mapping, and laboratory hardware deployment.
          </p>
          <Button to="/partner" variant="gold" size="lg" className="font-bold">Request Curriculum & DaaS Proposal →</Button>
        </div>
      </section>
    </>
  )
}
