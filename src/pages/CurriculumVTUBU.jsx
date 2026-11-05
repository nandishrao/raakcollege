import { useState } from 'react'
import Section from '@/components/layout/Section'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { vtuBTechCurriculum, bangaloreUniversityBCACurriculum } from '@/content/universityCurricula'
import { BookOpen, CheckCircle, Download, FileText, ArrowRight, GraduationCap } from 'lucide-react'

export default function CurriculumVTUBU() {
  const [activeTab, setActiveTab] = useState('vtu') // 'vtu' or 'bu'

  return (
    <>
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-4 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">
            <GraduationCap size={13} className="text-burgundy" /> University Academic Affairs
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-6">
           Curriculam for Bangalore University & VTU Colleges
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8">
            Fully mapped, credit-compliant syllabi designed for colleges affiliated with Visvesvaraya Technological University (VTU), Bangalore University (BU), and autonomous institutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button to="/partner?interest=B.Tech%20programme" variant="burgundy" size="md" className="font-bold">
              Request University Scheme Consultation
            </Button>
            <Button href="/brochure.pdf" variant="sand" size="md" className="font-bold">
              Download Scheme Documentation (PDF) →
            </Button>
          </div>
        </div>
      </header>

      {/* University Selector Switcher */}
      <section className="bg-white border-b border-ivory-sand sticky top-[72px] z-20 py-4 shadow-sm backdrop-blur-md bg-white/95">
        <div className="mx-auto max-w-academic px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('vtu')}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition-all border ${
                activeTab === 'vtu'
                  ? 'bg-burgundy text-white border-burgundy shadow-sm'
                  : 'bg-ivory text-charcoal border-ivory-sand hover:border-burgundy'
              }`}
            >
              VTU Engineering Schemes (B.Tech)
            </button>
            <button
              onClick={() => setActiveTab('bu')}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition-all border ${
                activeTab === 'bu'
                  ? 'bg-burgundy text-white border-burgundy shadow-sm'
                  : 'bg-ivory text-charcoal border-ivory-sand hover:border-burgundy'
              }`}
            >
              Bangalore University Schemes (BCA)
            </button>
          </div>
          <div className="font-mono text-xs text-gold-dark font-semibold">
            {activeTab === 'vtu' ? "160 Credits CBCS / NEP Scheme" : "NEP 2020 KSHEC Model Curriculum"}
          </div>
        </div>
      </section>

      {/* VTU Content */}
      {activeTab === 'vtu' && (
        <>
          <Section number="01" eyebrow="VTU ALIGNMENT" title="Visvesvaraya Technological University (VTU) B.Tech Schemes" theme="sand"
            subtitle="Engineered to meet VTU 2021/2022 scheme guidelines with 160 credits, professional electives, and mandatory capstones.">
            
            {/* Official VTU Institutional Header Card */}
            <div className="mb-10 p-6 md:p-8 bg-white border border-ivory-sand shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/vtu-logo.png"
                  alt="Visvesvaraya Technological University"
                  className="h-24 w-24 sm:h-28 sm:w-28 object-contain rounded-full bg-white p-1.5 border-2 border-ivory-sand shadow-sm shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <Badge variant="burgundy">State Technological University</Badge>
                    <span className="font-mono text-xs text-charcoal-muted">Belagavi, Karnataka · Estd. 1998</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal font-semibold">
                    Visvesvaraya Technological University
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-light font-light mt-1">
                    Official 160-Credit Choice Based Credit System (CBCS) & NEP-aligned Curriculum for Autonomous & Affiliated Engineering Colleges
                  </p>
                </div>
              </div>
              <div className="shrink-0 font-mono text-xs text-gold-dark font-bold bg-ivory px-3.5 py-2 border border-ivory-sand flex items-center gap-1.5">
                <CheckCircle size={14} className="text-burgundy" /> VTU Scheme Approved
              </div>
            </div>

            <div className="space-y-12">
              {vtuBTechCurriculum.programmes.map((prog, pIdx) => (
                <div key={prog.code} className="border border-ivory-sand bg-white p-8 md:p-10 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-ivory-sand">
                    <div>
                      <div className="flex items-center gap-3.5 mb-2 flex-wrap">
                        <img
                          src="/vtu-logo.png"
                          alt="VTU"
                          className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                        />
                        <Badge variant="burgundy">VTU Scheme</Badge>
                        <span className="font-mono text-xs text-charcoal-muted font-semibold">{prog.code}</span>
                      </div>
                      <h3 className="font-serif text-3xl text-charcoal">{prog.title}</h3>
                    </div>
                    <Button to={`/programmes/${pIdx === 0 ? 'btech-ai-robotics-autonomous-systems' : 'btech-robotics-drone-systems'}`} variant="outline-burgundy" size="sm" className="font-bold font-mono text-xs uppercase">
                      View Programme Specs →
                    </Button>
                  </div>

                  {/* Semester Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prog.semesters.map((sem, sIdx) => (
                      <div key={sem.sem} className="border border-ivory-sand bg-ivory p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3 pb-2 border-b border-ivory-sand">
                            <span className="font-serif text-lg text-charcoal font-semibold">{sem.sem}</span>
                            {sem.credits && <span className="font-mono text-xs text-burgundy font-bold">{sem.credits}</span>}
                          </div>
                          <ul className="space-y-2.5">
                            {sem.courses.map((c, cIdx) => (
                              <li key={cIdx} className="text-xs text-charcoal-light leading-relaxed">
                                <div className="font-mono text-[10px] text-charcoal-muted flex items-center justify-between">
                                  <span>{c.code}</span>
                                  <span className="text-burgundy font-semibold">{c.type}</span>
                                </div>
                                <div className="font-medium text-charcoal mt-0.5">{c.title}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      {/* Bangalore University Content */}
      {activeTab === 'bu' && (
        <>
          <Section number="01" eyebrow="BANGALORE UNIVERSITY ALIGNMENT" title="Bangalore University (BU) BCACurriculam" theme="sand"
            subtitle="Designed per Karnataka State Higher Education Council NEP 2020 BCA guidelines with heavy practical programming immersion.">
            
            {/* Official Bangalore University Institutional Header Card */}
            <div className="mb-10 p-6 md:p-8 bg-white border border-ivory-sand shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/bu-logo.png"
                  alt="Bangalore University"
                  className="h-24 w-24 sm:h-28 sm:w-28 object-contain rounded-full bg-white p-1.5 border-2 border-ivory-sand shadow-sm shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <Badge variant="gold">State Public University</Badge>
                    <span className="font-mono text-xs text-charcoal-muted">Bengaluru, Karnataka · Estd. 1964 · NAAC A++</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal font-semibold">
                    Bangalore University
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-light font-light mt-1">
                    Karnataka State Higher Education Council (KSHEC) NEP 2020 Model Curriculum in Applied AI, Robotics & Computer Applications
                  </p>
                </div>
              </div>
              <div className="shrink-0 font-mono text-xs text-gold-dark font-bold bg-ivory px-3.5 py-2 border border-ivory-sand flex items-center gap-1.5">
                <CheckCircle size={14} className="text-gold-dark" /> BU NEP 2020 Approved
              </div>
            </div>

            <div className="space-y-12">
              {bangaloreUniversityBCACurriculum.programmes.map((prog, pIdx) => (
                <div key={prog.code} className="border border-ivory-sand bg-white p-8 md:p-10 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-ivory-sand">
                    <div>
                      <div className="flex items-center gap-3.5 mb-2 flex-wrap">
                        <img
                          src="/bu-logo.png"
                          alt="Bangalore University"
                          className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                        />
                        <Badge variant="gold">Bangalore University Model</Badge>
                        <span className="font-mono text-xs text-charcoal-muted font-semibold">{prog.code}</span>
                      </div>
                      <h3 className="font-serif text-3xl text-charcoal">{prog.title}</h3>
                    </div>
                    <Button to={`/programmes/${pIdx === 0 ? 'bca-artificial-intelligence-robotics' : 'bca-robotics-drone-technology'}`} variant="outline-burgundy" size="sm" className="font-bold font-mono text-xs uppercase">
                      View Programme Specs →
                    </Button>
                  </div>

                  {/* Semesters */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prog.semesters.map((sem, sIdx) => (
                      <div key={sem.sem} className="border border-ivory-sand bg-ivory p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3 pb-2 border-b border-ivory-sand">
                            <span className="font-serif text-lg text-charcoal font-semibold">{sem.sem}</span>
                            <span className="font-mono text-xs text-gold-dark font-bold">NEP 2020</span>
                          </div>
                          <ul className="space-y-2.5">
                            {sem.courses.map((c, cIdx) => (
                              <li key={cIdx} className="text-xs text-charcoal-light leading-relaxed">
                                <div className="font-mono text-[10px] text-charcoal-muted flex items-center justify-between">
                                  <span>{c.code}</span>
                                  <span className="text-gold-dark font-semibold">{c.type}</span>
                                </div>
                                <div className="font-medium text-charcoal mt-0.5">{c.title}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      {/* Board of Studies (BoS) Integration Blueprint */}
      <Section number="02" eyebrow="INSTITUTIONAL INTEGRATION" title="How the Board of Studies (BoS) Adopts the Curriculum" theme="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "Step 01",
              title: "Academic Council Presentation",
              desc: "RAAK Sapphire's academic affairs directorate provides complete syllabus copies, course outcomes (COs), program outcomes (POs) and Bloom's taxonomy mappings for your college's BoS committee.",
            },
            {
              step: "Step 02",
              title: "Credit & Elective Alignment",
              desc: "Whether your institution runs as an autonomous college under VTU or follows the centralized Bangalore University syllabus, we fit the modules cleanly as core tracks or integrated electives.",
            },
            {
              step: "Step 03",
              title: "Laboratory Co-delivery & Exam Audits",
              desc: "Industry fellows co-conduct practical viva examinations, project evaluations, and provide continuous grading rubrics recognized by accreditation councils (NAAC & NBA).",
            },
          ].map((item, idx) => (
            <Reveal key={item.step} delay={idx * 0.1}>
              <div className="bg-ivory border border-ivory-sand p-8 hover:border-burgundy/60 transition-colors h-full shadow-sm">
                <span className="font-mono text-xs uppercase tracking-wider text-burgundy font-bold block mb-2">{item.step}</span>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Dean & HOD Consultation CTA in Burgundy */}
      <section className="bg-burgundy border-t-4 border-gold py-20 text-white">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Are You an Academic Dean or HOD?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-base">
            Request our complete BoS syllabus documentation package, credit structure comparisons, and sample question banks.
          </p>
          <Button to="/partner?interest=Comprehensive%20DaaS%20partnership" variant="gold" size="lg" className="font-bold">
            Request Complete BoS Syllabus Package →
          </Button>
        </div>
      </section>
    </>
  )
}
