import { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from '@/components/motion/CountUp'
import Reveal from '@/components/motion/Reveal'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Marquee from '@/components/motion/Marquee'
import { credentials, pillars } from '@/content/credentials'
import { programmes } from '@/content/programmes'
import { certifications } from '@/content/certifications'
import { daasSteps } from '@/content/daas'
import { careerRoles } from '@/content/careers'
import { accreditations } from '@/content/partners'
import {
  ArrowRight,
  School,
  GraduationCap,
  Sparkles,
  Building2,
  CheckCircle2,
  Award,
  BookOpen,
  Layers,
  Cpu,
  Laptop,
  Check,
  ChevronRight
} from 'lucide-react'

// ─── Hero: Clean Academic Portal Aesthetic ──────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-ivory pt-12 md:pt-20 pb-14 md:pb-20 border-b border-ivory-sand overflow-hidden">
      <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-6 border border-burgundy/20 bg-burgundy-soft px-4 py-1.5 font-bold shadow-sm">
            <Sparkles size={13} className="text-burgundy" />
            AI · ROBOTICS · DRONE ACADEMIC ECOSYSTEM
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw+1rem,5rem)] text-charcoal leading-[1.08] tracking-tight mb-6">
            Build the Future.<br />
            <span className="text-burgundy italic">Educate Innovators.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-charcoal-light text-base md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
            An integrated Department-as-a-Service (DaaS) framework empowering schools, PU colleges, and degree institutions with industry-aligned programmes, certifications, advanced labs, and placement support.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/partner" variant="burgundy" size="lg" className="font-bold">
              Partner With Us →
            </Button>
            <Button to="/curriculum" variant="outline-burgundy" size="lg" className="font-bold">
              Inspect VTU & BUCurriculam
            </Button>
            <Button to="/schools" variant="gold" size="lg" className="font-bold">
              School Innovation Labs
            </Button>
          </div>
        </Reveal>

        {/* Institutional Affiliation Bar */}
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-charcoal-muted border-t border-ivory-sand pt-6 max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5 text-charcoal font-semibold">
              <School size={15} className="text-burgundy" /> Schools (K-12 & ATL)
            </span>
            <span className="text-charcoal-muted">•</span>
            <span className="flex items-center gap-1.5 text-charcoal font-semibold">
              <Building2 size={15} className="text-gold-dark" /> Bangalore University (BU BCA)
            </span>
            <span className="text-charcoal-muted">•</span>
            <span className="flex items-center gap-1.5 text-charcoal font-semibold">
              <GraduationCap size={15} className="text-burgundy" /> VTU Engineering Colleges (B.Tech)
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Interactive Institutional Segment Switcher ──────────────────────────────
function InstitutionalSegmentSwitcher() {
  const [activeTab, setActiveTab] = useState(0)

  const segments = [
    {
      id: "schools",
      label: "K-12 Schools & ATL",
      audience: "For School Trustees, Principals & STEAM Coordinators",
      title: "School Maker Spaces & Experiential Robotics",
      desc: "State-of-the-art Atal Tinkering Labs (ATL), 3D printing stations, safety-tested drone flight cages, and NEP 2020 experiential curricula designed for CBSE, ICSE, and State Board schools.",
      deliverables: [
        "Comprehensive ATL lab setup with DIY robotics & electronic prototyping benches",
        "Indoor netted drone flight cage with pilot telemetry simulators",
        "Grade-appropriate curriculum from Primary to High School",
        "Annual national hackathons and inter-school science competitions",
      ],
      link: "/schools",
      btnText: "Explore School Solutions →",
      accent: "burgundy",
    },
    {
      id: "bu",
      label: "Bangalore University (BCA)",
      audience: "For Degree College Principals, Academic Directors & HODs",
      title: "NEP 2020 BCA Programmes in Applied AI & Robotics",
      desc: "Comprehensive 6-semester curricula aligned with the Karnataka State Higher Education Council (KSHEC) model. Blends practical software development with machine learning, ROS, and cloud AI.",
      deliverables: [
        "Semester 1 to 6 mapped syllabi ready for Board of Studies (BoS) adoption",
        "Computer Vision, Deep Learning, ROS 2, and Generative AI course codes",
        "Hands-on programming labs using real hardware and simulated edge nodes",
        "Direct campus placement eligibility and corporate internship pipeline",
      ],
      link: "/curriculum",
      btnText: "Inspect BU BCA Scheme →",
      accent: "gold",
    },
    {
      id: "vtu",
      label: "VTU Colleges (B.Tech)",
      audience: "For Engineering Deans, BoS Chairpersons & College Trustees",
      title: "160-Credit B.Tech in Autonomous Systems & UAVs",
      desc: "Fully structured 8-semester CBCS schemes meeting Visvesvaraya Technological University (VTU) guidelines. Integrates MLOps, SLAM navigation, UAV avionics, and industrial robotic arms.",
      deliverables: [
        "Semester 3 to 8 Professional Core, Integrated Labs & Open Electives",
        "Fully equipped Industry 4.0 arms, mobile rovers, and flight test arena",
        "Phase-1 & Phase-2 Industry Capstone Projects with DGCA logbook support",
        "Continuous faculty development workshops co-taught with industry fellows",
      ],
      link: "/curriculum",
      btnText: "Inspect VTU B.Tech Scheme →",
      accent: "burgundy",
    },
    {
      id: "daas",
      label: "Centre of Excellence Labs",
      audience: "For Institutions Seeking End-to-End Department Setup",
      title: "Department-as-a-Service (DaaS) Partnership",
      desc: "A complete institutional partnership model where RAAK Sapphire installs, equips, manages, and co-delivers an entire emerging-technology department inside your campus.",
      deliverables: [
        "Seven advanced technical labs installed with industrial-grade equipment",
        "Complete curriculum design, question banks, and Bloom's taxonomy rubrics",
        "Semester-wise Faculty Enablement Programmes (FEP) with certifications",
        "On-campus corporate internship drives and placement placement guarantee",
      ],
      link: "/daas",
      btnText: "Explore Full DaaS Model →",
      accent: "wine",
    },
  ]

  const current = segments[activeTab]

  return (
    <section className="bg-sand/30 py-16 border-b border-ivory-sand">
      <div className="mx-auto max-w-academic px-6 md:px-12">
        <div className="text-center mb-10">
          <div className="font-mono text-xs uppercase tracking-wider text-burgundy font-bold mb-2">
            Institutional Taxonomy
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Tailored Solutions for Every Institution Level
          </h2>
          <p className="text-charcoal-light text-sm md:text-base font-light max-w-2xl mx-auto mt-2">
            Select your institution type below to review the customized academic framework, curriculum scheme, and lab deliverables.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {segments.map((seg, idx) => (
            <button
              key={seg.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition-all border ${
                activeTab === idx
                  ? 'bg-burgundy text-white border-burgundy shadow-sm'
                  : 'bg-white text-charcoal border-ivory-sand hover:border-burgundy'
              }`}
            >
              {seg.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-white border border-ivory-sand p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3.5 mb-2 flex-wrap">
                {current.id === 'vtu' && (
                  <img
                    src="/vtu-logo.png"
                    alt="Visvesvaraya Technological University"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                  />
                )}
                {current.id === 'bu' && (
                  <img
                    src="/bu-logo.png"
                    alt="Bangalore University"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                  />
                )}
                <span className="font-mono text-xs text-gold-dark uppercase tracking-wider font-bold">
                  {current.audience}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                {current.title}
              </h3>
              <p className="text-charcoal-light text-sm md:text-base font-light leading-relaxed mb-6">
                {current.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to={current.link} variant="burgundy" size="md" className="font-bold">
                  {current.btnText}
                </Button>
                <Button to="/partner" variant="outline-burgundy" size="md" className="font-bold">
                  Schedule Consultation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-ivory p-6 border border-ivory-sand">
              <div className="font-mono text-xs uppercase tracking-wider text-burgundy font-bold mb-4 pb-2 border-b border-ivory-sand">
                Key Deliverables & Specifications
              </div>
              <ul className="space-y-3">
                {current.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs text-charcoal leading-relaxed">
                    <CheckCircle2 size={15} className="text-burgundy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 4 Feature Cards (Eduvet style) on Soft Sand ──────────────────────────────
function InstitutionalOverviewGrid() {
  const cards = [
    {
      title: "K-12 School Innovation",
      sub: "Atal Tinkering Labs & Drones",
      desc: "Dedicated maker spaces, 3D printers, DIY robotics platforms, and netted flight cages for schools.",
      link: "/schools",
      btn: "Explore Schools",
      icon: School,
    },
    {
      title: "Bangalore University BCA",
      sub: "NEP 2020 KSHEC Scheme",
      desc: "Applied AI, Machine Learning, Python, and ROS robotics tracks designed for high-growth IT careers.",
      link: "/curriculum",
      btn: "View BU Syllabus",
      icon: Laptop,
    },
    {
      title: "VTU 160-Credit B.Tech",
      sub: "Autonomous Robotics & UAVs",
      desc: "CBCS curriculum mapped to Semesters 3-8 with MLOps, SLAM, flight avionics, and capstones.",
      link: "/curriculum",
      btn: "View VTU Scheme",
      icon: GraduationCap,
    },
    {
      title: "Centre of Excellence Labs",
      sub: "Hardware, Faculty & Placements",
      desc: "Complete campus setup with 6-axis arms, UAV cages, faculty training (FEP), and placement drives.",
      link: "/daas",
      btn: "Explore DaaS Model",
      icon: Layers,
    },
  ]

  return (
    <section className="bg-sand py-16 border-b border-ivory-sand">
      <div className="mx-auto max-w-academic px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="font-mono text-xs uppercase tracking-wider text-burgundy font-bold mb-2">Institutional Framework</div>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            A Complete Tech Education Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="bg-white p-7 border border-ivory-sand shadow-sm flex flex-col justify-between hover:border-burgundy/60 transition-all hover:-translate-y-1">
                <div>
                  <div className="w-10 h-10 border border-burgundy bg-burgundy-soft flex items-center justify-center mb-4">
                    <Icon size={18} className="text-burgundy" />
                  </div>
                  <span className="font-mono text-xs text-gold-dark uppercase tracking-wider font-bold block mb-1">{c.sub}</span>
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{c.title}</h3>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed mb-6">{c.desc}</p>
                </div>
                <Link to={c.link} className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-burgundy font-bold hover:underline">
                  {c.btn} <ArrowRight size={12} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Credentials Band ────────────────────────────────────────────────────────
function CredentialsBand() {
  return (
    <section className="bg-white border-b border-ivory-sand py-14">
      <div className="mx-auto max-w-academic px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-ivory-sand">
          {credentials.map(c => (
            <div key={c.label} className="flex flex-col items-center text-center md:px-8">
              {c.isText ? (
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-burgundy font-bold h-[40px] md:h-[48px] flex items-center justify-center">
                  {c.textValue}
                </div>
              ) : (
                <CountUp target={c.value} suffix={c.suffix} className="font-serif text-4xl md:text-5xl text-burgundy font-bold" />
              )}
              <div className="font-semibold text-sm text-charcoal mt-2">{c.label}</div>
              <div className="font-mono text-[11px] text-charcoal-muted mt-1">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pillars ─────────────────────────────────────────────────────────────────
function Pillars() {
  return (
    <Section number="01" eyebrow="ACADEMIC RIGOUR" title="Six Pillars of Academic Excellence" theme="ivory">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <div className="border border-ivory-sand bg-white hover:border-burgundy/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-7">
              <div className="font-mono text-xs tracking-wider text-burgundy mb-3 pb-3 border-b border-ivory-sand font-bold">
                {p.n}
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">{p.title}</h3>
              <p className="text-sm text-charcoal-light font-light leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

// ─── UniversityCurriculam Spotlight (VTU & BU) ──────────────────────────────
function UniversityCurriculaSpotlight() {
  return (
    <Section
      number="02"
      eyebrow="ACADEMIC AFFAIRS"
      title="University-ApprovedCurriculam"
      subtitle="Complete semester-by-semester course blueprints ready for Board of Studies (BoS) integration."
      theme="white"
      headerAction={<Button to="/curriculum" variant="outline-burgundy" size="sm" className="font-mono text-xs tracking-wider uppercase font-bold">View VTU & BU Syllabi</Button>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* VTU Card */}
        <Reveal>
          <div className="border border-ivory-sand bg-ivory p-8 hover:border-burgundy transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-ivory-sand flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <img
                  src="/vtu-logo.png"
                  alt="Visvesvaraya Technological University"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shadow-xs shrink-0"
                />
                <Badge variant="burgundy">VTU Engineering Scheme</Badge>
              </div>
              <span className="font-mono text-xs text-charcoal-muted font-semibold">160 Credits CBCS</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">VTU Engineering Colleges</h3>
            <p className="font-mono text-xs text-burgundy mb-4 font-bold">Visvesvaraya Technological University Framework</p>
            <p className="text-sm text-charcoal-light font-light leading-relaxed mb-6">
              Full 8-semester course outlines for B.Tech in Artificial Intelligence, Robotics & Autonomous Systems and B.Tech in Robotics & Drone Systems, complete with lab rubrics and project phases.
            </p>
            <div className="space-y-2 mb-6 text-xs font-mono text-charcoal">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                <span>Semester 3 to 8 Professional Core & Integrated Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                <span>ROS 2, MLOps, Autonomous UAVs, and Industrial Arm Cells</span>
              </div>
            </div>
            <Link to="/curriculum" className="inline-flex items-center gap-2 font-mono text-xs text-burgundy uppercase tracking-wider font-bold hover:underline">
              Inspect VTU Course Codes <ArrowRight size={13} />
            </Link>
          </div>
        </Reveal>

        {/* Bangalore University Card */}
        <Reveal delay={0.1}>
          <div className="border border-ivory-sand bg-ivory p-8 hover:border-burgundy transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-ivory-sand flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <img
                  src="/bu-logo.png"
                  alt="Bangalore University"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shadow-xs shrink-0"
                />
                <Badge variant="gold">BU Computer Applications</Badge>
              </div>
              <span className="font-mono text-xs text-charcoal-muted font-semibold">NEP 2020 KSHEC</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">Bangalore University (BU)</h3>
            <p className="font-mono text-xs text-gold-dark mb-4 font-bold">Karnataka State Higher Education Council Model</p>
            <p className="text-sm text-charcoal-light font-light leading-relaxed mb-6">
              Industry-integrated 6-semester BCA curricula in Applied AI & Robotics and Robotics & Drone Technology, designed for high-employability computer science careers.
            </p>
            <div className="space-y-2 mb-6 text-xs font-mono text-charcoal">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold-dark shrink-0" />
                <span>Python, Computer Vision, Generative AI, and Agentic Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold-dark shrink-0" />
                <span>MAVLink Drone Coding, Microcontrollers, and Cloud IoT</span>
              </div>
            </div>
            <Link to="/curriculum" className="inline-flex items-center gap-2 font-mono text-xs text-gold-dark uppercase tracking-wider font-bold hover:underline">
              Inspect BU BCA Schemes <ArrowRight size={13} />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

// ─── School Innovation & STEAM Showcase ──────────────────────────────────────
function SchoolShowcaseSection() {
  return (
    <Section
      number="03"
      eyebrow="K-12 & PU COLLEGES"
      title="School Innovation & Maker Spaces"
      subtitle="Transforming school education through hands-on Atal Tinkering Labs and drone flight cages."
      theme="ivory"
      headerAction={<Button to="/schools" variant="burgundy" size="sm" className="font-mono text-xs tracking-wider uppercase font-bold">Explore School Solutions</Button>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal>
          <div className="border border-ivory-sand bg-white p-7 hover:border-burgundy transition-all hover:-translate-y-1 hover:shadow-md h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-burgundy bg-burgundy-soft flex items-center justify-center font-mono text-xs text-burgundy font-bold mb-4">
                01
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-2">Atal Tinkering Labs (ATL)</h4>
              <p className="text-xs text-charcoal-light font-light leading-relaxed mb-4">
                Advanced ATL setups with 3D printers, DIY robotics platforms, electronic benches, and custom ROSBOTZ kits for CBSE, ICSE, and State Board schools.
              </p>
            </div>
            <span className="font-mono text-[11px] text-burgundy font-bold uppercase tracking-wider">Grades 6 to 12 · NEP 2020</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-ivory-sand bg-white p-7 hover:border-burgundy transition-all hover:-translate-y-1 hover:shadow-md h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-burgundy bg-burgundy-soft flex items-center justify-center font-mono text-xs text-burgundy font-bold mb-4">
                02
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-2">School Drone Flight Arenas</h4>
              <p className="text-xs text-charcoal-light font-light leading-relaxed mb-4">
                Safety-tested indoor netted flight cages and DIY drone kits where school students explore aerodynamics, flight controllers, and telemetry.
              </p>
            </div>
            <span className="font-mono text-[11px] text-burgundy font-bold uppercase tracking-wider">Safety Compliant Enclosures</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="border border-ivory-sand bg-white p-7 hover:border-burgundy transition-all hover:-translate-y-1 hover:shadow-md h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-burgundy bg-burgundy-soft flex items-center justify-center font-mono text-xs text-burgundy font-bold mb-4">
                03
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-2">STEAM IT Foundation</h4>
              <p className="text-xs text-charcoal-light font-light leading-relaxed mb-4">
                Grassroots school hackathons, national robotics exhibitions, and tinker workshops led by IITians and Navodayan Alumni for young innovators.
              </p>
            </div>
            <span className="font-mono text-[11px] text-burgundy font-bold uppercase tracking-wider">Non-Profit Foundation</span>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

// ─── Programmes Preview ───────────────────────────────────────────────────────
function ProgrammesPreview() {
  return (
    <Section
      number="04"
      eyebrow="DEGREE PROGRAMMES"
      title="Flagship Degree Specialisations"
      subtitle="Four specialised degree programmes co-designed with industry for tomorrow's automation sectors."
      theme="white"
      headerAction={<Button to="/programmes" variant="outline-burgundy" size="sm" className="font-mono text-xs tracking-wider uppercase font-bold">Compare All Programmes</Button>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programmes.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              to={`/programmes/${p.slug}`}
              className="group block border border-ivory-sand bg-ivory hover:border-burgundy hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between h-full"
            >
              <div>
                <Badge variant={p.degree === 'B.Tech' ? 'burgundy' : 'gold'} className="mb-4">
                  {p.degree} · {p.duration}
                </Badge>
                <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-burgundy transition-colors leading-snug">
                  {p.shortTitle}
                </h3>
                <p className="text-xs text-charcoal-light font-light leading-relaxed mb-6">{p.tagline}</p>
              </div>

              <div>
                <div className="font-mono text-[10px] text-charcoal-muted uppercase tracking-wider mb-2 font-semibold">Specialisation Focus</div>
                <div className="font-mono text-xs text-charcoal font-medium border-t border-ivory-sand pt-3 flex items-center justify-between">
                  <span>View Syllabus</span>
                  <ArrowRight size={13} className="text-burgundy group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

// ─── DaaS Explainer ──────────────────────────────────────────────────────────
function DaasExplainer() {
  return (
    <Section
      number="05"
      eyebrow="DaaS ROADMAP"
      title="Department-as-a-Service Framework"
      subtitle="A 5-step institutional roadmap from curriculum blueprint to campus placement drives."
      theme="sand"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {daasSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.08}>
            <div className="border border-ivory-sand bg-white p-6 flex flex-col justify-between h-full shadow-sm hover:border-burgundy transition-colors">
              <div>
                <span className="font-mono text-xs text-burgundy font-bold block mb-1">{s.step}</span>
                <span className="font-mono text-[10px] text-gold-dark font-semibold block mb-3">{s.timeline}</span>
                <h3 className="font-serif text-lg text-charcoal mb-2 leading-snug">{s.title}</h3>
                <p className="text-xs text-charcoal-light font-light leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button to="/daas" variant="burgundy" size="md" className="font-bold">
          Explore Full DaaS Model →
        </Button>
      </div>
    </Section>
  )
}

// ─── Certifications Grid ─────────────────────────────────────────────────────
function CertificationsGrid() {
  return (
    <Section
      number="06"
      eyebrow="CERTIFICATIONS"
      title="Industry Certification Programmes"
      subtitle="Eight specialised tracks delivering globally verifiable credentials."
      theme="white"
      headerAction={<Button to="/certifications" variant="outline-burgundy" size="sm" className="font-mono text-xs uppercase tracking-wider font-bold">View All Certifications</Button>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.07}>
            <div className="border border-ivory-sand bg-ivory hover:border-burgundy hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full shadow-sm">
              <div className="font-mono text-xs tracking-wider text-burgundy mb-3 pb-3 border-b border-ivory-sand font-bold">{c.id}</div>
              <h3 className="font-serif text-xl text-charcoal mb-1">{c.title}</h3>
              <p className="font-mono text-xs text-burgundy italic mb-3 font-semibold">{c.tagline}</p>
              <p className="text-xs text-charcoal-light font-light leading-relaxed flex-1">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

// ─── Career Outcomes ──────────────────────────────────────────────────────────
function CareerOutcomes() {
  return (
    <Section number="07" eyebrow="CAREER OUTCOMES" title="Roles Our Graduates Enter" theme="ivory"
      subtitle="A spectrum of high-growth technology positions across India and globally.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {careerRoles.map((r, i) => (
          <Reveal key={r} delay={i * 0.05}>
            <div className="border border-ivory-sand bg-white px-5 py-4 hover:border-burgundy transition-colors shadow-sm">
              <div className="w-2 h-2 bg-burgundy rounded-full mb-3" />
              <div className="font-serif text-base text-charcoal font-medium">{r}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

// ─── Accreditation Marquee ────────────────────────────────────────────────────
function AccreditationStrip() {
  return (
    <section className="bg-white border-y border-ivory-sand py-10 overflow-hidden">
      <div className="mb-4 mx-auto max-w-academic px-6 md:px-12 flex items-center justify-between">
        <div className="font-mono text-xs uppercase tracking-wider text-burgundy font-bold">Recognition & Accreditation</div>
        <Link to="/recognition" className="font-mono text-xs text-charcoal-muted hover:text-burgundy transition-colors flex items-center gap-1 font-semibold">
          View All <ArrowRight size={11} />
        </Link>
      </div>
      <Marquee>
        {accreditations.map(a => (
          <div key={a.name} className="shrink-0 px-6 py-2.5 border border-ivory-sand bg-ivory hover:border-burgundy transition-colors">
            <div className="font-mono text-xs uppercase tracking-wider text-charcoal font-semibold whitespace-nowrap">{a.name}</div>
            <div className="font-mono text-[10px] text-charcoal-muted mt-0.5">{a.category}</div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

// ─── Closing CTA in Deep Burgundy ─────────────────────────────────────────────
function ClosingCTA() {
  return (
    <section className="bg-burgundy text-white py-20 md:py-28 border-t-4 border-gold">
      <div className="mx-auto max-w-academic px-6 md:px-12 text-center">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-wider text-gold-soft mb-4 font-bold">Institutional Partnership</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight mb-6">
            Shaping India's Future Together Through Skills, Education & Innovation
          </h2>
          <p className="text-white/80 font-light text-base md:text-lg max-w-2xl mx-auto mb-10">
            Partner with RAAK Sapphire to establish a world-class AI, Robotics and Drone Centre of Excellence at your school or college.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/partner" variant="gold" size="lg" className="font-bold px-8 py-3.5">
              Partner With Us →
            </Button>
            <Button to="/curriculum" variant="white" size="lg" className="font-bold px-8 py-3.5">
              Inspect VTU & BU Syllabi
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <InstitutionalSegmentSwitcher />
      <InstitutionalOverviewGrid />
      <CredentialsBand />
      <Pillars />
      <UniversityCurriculaSpotlight />
      <SchoolShowcaseSection />
      <ProgrammesPreview />
      <DaasExplainer />
      <CertificationsGrid />
      <CareerOutcomes />
      <AccreditationStrip />
      <ClosingCTA />
    </>
  )
}
