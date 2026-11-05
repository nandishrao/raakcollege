import { useParams, Link } from 'react-router-dom'
import { programmes } from '@/content/programmes'
import Section from '@/components/layout/Section'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/motion/Reveal'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ProgrammeDetail() {
  const { slug } = useParams()
  const prog = programmes.find(p => p.slug === slug)

  if (!prog) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center text-center px-6">
        <div>
          <div className="font-mono text-xs text-academic uppercase tracking-eyebrow mb-3 font-bold">404</div>
          <h1 className="font-serif text-4xl text-charcoal mb-4">Programme Not Found</h1>
          <Link to="/programmes" className="font-mono text-xs text-academic hover:underline">Back to Programmes</Link>
        </div>
      </div>
    )
  }

  const badgeVariant = prog.degree === 'B.Tech' ? 'academic' : 'gold'

  return (
    <>
      {/* Hero */}
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <Link to="/programmes" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy hover:underline mb-6 font-bold group">
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Programmes
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {prog.degree === 'B.Tech' ? (
              <div className="flex items-center gap-2.5">
                <img
                  src="/vtu-logo.png"
                  alt="Visvesvaraya Technological University"
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                />
                <Badge variant="burgundy">VTU Engineering Scheme</Badge>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <img
                  src="/bu-logo.png"
                  alt="Bangalore University"
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                />
                <Badge variant="gold">Bangalore University Model</Badge>
              </div>
            )}
            <span className="font-mono text-xs text-charcoal-muted border border-ivory-sand bg-white px-3 py-1 font-semibold">{prog.duration}</span>
            {prog.degree === 'B.Tech' ? (
              <span className="font-mono text-xs text-gold-dark font-semibold">160 Credits CBCS</span>
            ) : (
              <span className="font-mono text-xs text-gold-dark font-semibold">NEP 2020 KSHEC</span>
            )}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-tight max-w-3xl mb-4">
            {prog.shortTitle}
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8">{prog.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Button to="/partner" variant="burgundy" size="md" className="font-bold">Launch Programme at My College</Button>
            <Button href="/brochure.pdf" variant="outline-burgundy" size="md" className="font-bold">
              Download Full Syllabus (PDF) →
            </Button>
          </div>
        </div>
      </header>

      {/* Curriculum Modules */}
      <Section number="01" eyebrow="CURRICULUM BREAKDOWN" title="Academic Modules & Sprints" theme="ivory">
        <div className="bg-white border border-ivory-sand p-8 shadow-sm">
          <Accordion items={prog.modules} theme="light" />
        </div>
      </Section>

      {/* Career Outcomes */}
      <Section number="02" eyebrow="CAREER PATHWAYS" title="Graduate Career Scope" theme="white"
        subtitle="Target job titles for students completing this degree specialization.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prog.careers.map((c, i) => (
            <Reveal key={c} delay={i * 0.08}>
              <div className="bg-ivory border border-ivory-sand p-6 hover:border-burgundy transition-colors h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-2 h-2 bg-burgundy rounded-full mb-3" />
                  <div className="font-serif text-xl text-charcoal mb-1">{c}</div>
                  <div className="font-mono text-xs text-burgundy font-semibold">High Growth Automation Profile</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Labs Mapped */}
      <Section number="03" eyebrow="CAMPUS INFRASTRUCTURE" title="Dedicated Laboratories Included" theme="sand"
        subtitle="Institutions establish these physical facilities under the institutional DaaS agreement.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prog.labs.map((l, i) => (
            <Reveal key={l} delay={i * 0.08}>
              <div className="flex items-center gap-4 border border-ivory-sand bg-white p-5 shadow-sm">
                <div className="w-10 h-10 border-2 border-burgundy bg-burgundy-soft flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs text-burgundy font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <span className="text-charcoal font-medium text-base">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it runs at college */}
      <section className="bg-charcoal text-white py-20 border-t-4 border-gold">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <div className="border border-white/20 p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-wider text-gold mb-3 font-bold">Board of Studies & Delivery</div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">How This Programme Operates on Your Campus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 text-sm font-light leading-relaxed">
              <div>
                <p className="mb-4">
                  The programme runs under the <strong className="text-white font-semibold">Department-as-a-Service (DaaS)</strong> model — a comprehensive partnership where RAAK Sapphire provides the syllabus documentation, commissions the hardware laboratories, and trains your faculty.
                </p>
                <p>
                  University credit integration is approved through your college's Academic Council or Board of Studies (BoS), meeting all VTU / Bangalore University statutory guidelines.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Full university credit alignment & syllabus copies",
                  "Dedicated Centre of Excellence laboratory on campus",
                  "Semester-wise Faculty Enablement Programmes (FEP)",
                  "Integrated global certifications for every enrolled student",
                  "Direct corporate summer internships and campus placement",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/partner" variant="gold" size="md" className="font-bold">Inquire for Your College</Button>
              <Button to="/curriculum" variant="white" size="md" className="font-bold">Inspect University Scheme</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
