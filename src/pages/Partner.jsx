import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/content/site'
import { Phone, Mail, MapPin, CheckCircle2, MessageSquare, Download, Building, School } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  designation: z.string().min(1, "Please select your designation"),
  institutionName: z.string().min(3, "Please enter institution name"),
  affiliation: z.string().min(1, "Please select institution affiliation"),
  city: z.string().min(2, "Please enter your city"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number (at least 10 digits)"),
  interest: z.string().min(1, "Please select your primary interest"),
  message: z.string().min(10, "Please describe your requirement in at least 10 characters"),
})

export default function Partner() {
  const [searchParams] = useSearchParams()
  const initialInterest = searchParams.get('interest') || ''
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      interest: initialInterest || "Comprehensive DaaS partnership",
      affiliation: "VTU (Visvesvaraya Technological University)",
      designation: "Principal",
    }
  })

  useEffect(() => {
    if (initialInterest) {
      setValue('interest', initialInterest)
    }
  }, [initialInterest, setValue])

  const onSubmit = (data) => {
    console.log("Partnership enquiry submitted:", data)
    setSubmitted(true)
  }

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent("Hello RAAK Sapphire team, I would like to enquire about establishing an AI, Robotics & Drone Centre of Excellence at our institution.")
    return `https://wa.me/919742225873?text=${text}`
  }

  return (
    <>
      <header className="pt-20 pb-14 md:pt-28 md:pb-20 bg-ivory border-b border-ivory-sand">
        <div className="mx-auto max-w-academic px-6 md:px-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-burgundy mb-3 border border-burgundy/20 bg-burgundy-soft px-3.5 py-1 font-bold">Institutional Engagement</div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal max-w-3xl leading-tight mb-4">
            Partner With RAAK Sapphire
          </h1>
          <p className="text-charcoal-light text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Empower your students and elevate your institution with an industry-grade AI, Robotics and Drone Centre of Excellence designed for Schools, Bangalore University, and VTU colleges.
          </p>
        </div>
      </header>

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: What the College/School Receives */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-2 font-bold">Institutional Benefits</div>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">What Your Institution Receives</h2>
                
                {/* Official University Affiliation Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-3.5 bg-white p-3.5 border border-ivory-sand shadow-xs">
                    <img
                      src="/vtu-logo.png"
                      alt="VTU"
                      className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                    />
                    <div>
                      <div className="font-serif text-sm font-semibold text-charcoal">VTU Engineering</div>
                      <div className="font-mono text-[10px] text-charcoal-muted">160 Credits CBCS & BoS Mapped</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 bg-white p-3.5 border border-ivory-sand shadow-xs">
                    <img
                      src="/bu-logo.png"
                      alt="Bangalore University"
                      className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full bg-white p-1 border-2 border-ivory-sand shrink-0 shadow-xs"
                    />
                    <div>
                      <div className="font-serif text-sm font-semibold text-charcoal">Bangalore University</div>
                      <div className="font-mono text-[10px] text-charcoal-muted">NEP 2020 KSHEC Model</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "University-Aligned Programmes", desc: "VTU 160-credit B.Tech & Bangalore University NEP BCA tracks co-designed with industry leaders." },
                    { title: "School Innovation & ATL Labs", desc: "Dedicated maker spaces, 3D printing stations, and safety-tested indoor drone cages for K-12 schools." },
                    { title: "Advanced Hardware Provisioning", desc: "Robotic arms, UAV flight simulators, ROSBOTZ kits, and AI edge computing workstations." },
                    { title: "Continuous Faculty Enablement", desc: "Regular semester-wise training workshops and co-teaching clinics with industry fellows." },
                    { title: "Guaranteed Placement Pipeline", desc: "Corporate internships, live project mentorship, and structured recruitment drives." },
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-2 border-burgundy pl-4 py-1">
                      <h4 className="font-serif text-lg text-charcoal font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-charcoal-light font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brochure Download */}
              <div className="bg-white p-6 border border-ivory-sand shadow-sm">
                <div className="font-mono text-xs text-burgundy uppercase tracking-wider mb-1 font-bold">Official Prospectus</div>
                <h4 className="font-serif text-xl text-charcoal mb-2 font-medium">Download Academic Brochure</h4>
                <p className="text-xs text-charcoal-light font-light leading-relaxed mb-4">
                  Detailed syllabus breakdown, laboratory hardware inventory, and university affiliation models.
                </p>
                <a
                  href="/brochure.pdf"
                  download="RAAK-Sapphire-Brochure.pdf"
                  className="inline-flex items-center gap-2 bg-burgundy text-white hover:bg-burgundy-dark px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors font-bold shadow-sm"
                >
                  <Download size={14} /> Download Brochure (PDF)
                </a>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 font-mono text-xs text-charcoal-light border-t border-ivory-sand pt-6">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-burgundy shrink-0 mt-0.5" />
                  <span>28, Service Rd, next to Prashanth Hospital, towards Electronic City, Bommanahalli, Bengaluru 560068</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-burgundy shrink-0" />
                  <span>+91 97422 25873 · +91 82173 78963</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-burgundy shrink-0" />
                  <span>contactus@raaksapphire.com</span>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Intake Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-ivory-sand p-8 md:p-12 shadow-md">
                {submitted ? (
                  <div className="text-center py-12 animate-fadeUp">
                    <CheckCircle2 size={56} className="text-burgundy mx-auto mb-6" />
                    <h3 className="font-serif text-3xl text-charcoal mb-4">Enquiry Received</h3>
                    <p className="text-charcoal-light font-light max-w-md mx-auto mb-8 leading-relaxed text-sm md:text-base">
                      Thank you for contacting RAAK Sapphire. Our Academic Alliances team will review your institution's profile and contact you within 24 hours.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button onClick={() => setSubmitted(false)} variant="outline-burgundy" size="sm" className="font-bold">
                        Submit Another Request
                      </Button>
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-charcoal-dark px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors font-bold"
                      >
                        <MessageSquare size={14} className="text-gold" /> WhatsApp Connect
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-1 font-bold">Partnership Form</div>
                      <h3 className="font-serif text-2xl text-charcoal mb-1">Request an Institutional Blueprint</h3>
                      <p className="text-xs text-charcoal-muted font-light">Fields marked with an asterisk are required.</p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="Dr. / Prof. / Mr. / Ms."
                        className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-muted outline-none transition-colors"
                      />
                      {errors.name && <p className="text-red-600 font-mono text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Designation & Institution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                          Designation *
                        </label>
                        <select
                          {...register('designation')}
                          className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal outline-none transition-colors"
                        >
                          <option value="Principal">Principal / Headmaster</option>
                          <option value="Dean">Dean / Academic Director</option>
                          <option value="HOD">Head of Department (HOD)</option>
                          <option value="Trustee">Trustee / Management</option>
                          <option value="Faculty">Faculty Member</option>
                          <option value="Student">Student / Innovator</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                          Affiliation Framework *
                        </label>
                        <select
                          {...register('affiliation')}
                          className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal outline-none transition-colors"
                        >
                          <option value="School / K-12 (CBSE / ICSE / State)">School / K-12 (CBSE / ICSE / State)</option>
                          <option value="Pre-University College (PUC)">Pre-University College (PUC)</option>
                          <option value="Bangalore University (BU)">Bangalore University (BU Affiliated)</option>
                          <option value="VTU (Visvesvaraya Technological University)">VTU (Visvesvaraya Technological University)</option>
                          <option value="Autonomous Engineering College">Autonomous Engineering College</option>
                          <option value="Deemed / Private University">Deemed / Private University</option>
                        </select>
                      </div>
                    </div>

                    {/* Institution Name & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                          Institution Name *
                        </label>
                        <input
                          type="text"
                          {...register('institutionName')}
                          placeholder="e.g. Cambridge Institute of Tech"
                          className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-muted outline-none transition-colors"
                        />
                        {errors.institutionName && <p className="text-red-600 font-mono text-xs mt-1">{errors.institutionName.message}</p>}
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                          City / State *
                        </label>
                        <input
                          type="text"
                          {...register('city')}
                          placeholder="e.g. Bengaluru, Karnataka"
                          className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-muted outline-none transition-colors"
                        />
                        {errors.city && <p className="text-red-600 font-mono text-xs mt-1">{errors.city.message}</p>}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="principal@college.edu.in"
                          className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-muted outline-none transition-colors"
                        />
                        {errors.email && <p className="text-red-600 font-mono text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+91 98765 43210"
                          className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-muted outline-none transition-colors"
                        />
                        {errors.phone && <p className="text-red-600 font-mono text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    {/* Primary Interest */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                        Primary Academic Interest *
                      </label>
                      <select
                        {...register('interest')}
                        className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal outline-none transition-colors"
                      >
                        <option value="Comprehensive DaaS partnership">Comprehensive DaaS Department Partnership</option>
                        <option value="School Innovation & ATL Lab">School Innovation Lab & ATL Setup</option>
                        <option value="VTU B.Tech programme">VTU B.Tech Programme Integration</option>
                        <option value="Bangalore University BCA programme">Bangalore University BCA Programme Integration</option>
                        <option value="Certification programmes">Certification Programmes (8 Tracks)</option>
                        <option value="Lab setup">Lab Hardware & Drone Flight Cage Setup</option>
                        <option value="Faculty training">Faculty Enablement Programme (FEP)</option>
                        <option value="Internship enquiry">Student Internship Enquiry</option>
                      </select>
                      {errors.interest && <p className="text-red-600 font-mono text-xs mt-1">{errors.interest.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-charcoal font-semibold mb-1.5">
                        Requirement Details *
                      </label>
                      <textarea
                        rows={3}
                        {...register('message')}
                        placeholder="Please share your estimated student intake, existing space, or specific school/college requirements..."
                        className="w-full bg-ivory border border-ivory-sand focus:border-burgundy px-4 py-2.5 text-sm text-charcoal placeholder-charcoal-muted outline-none transition-colors resize-none"
                      />
                      {errors.message && <p className="text-red-600 font-mono text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                      <Button
                        type="submit"
                        variant="burgundy"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto font-bold"
                      >
                        {isSubmitting ? "Transmitting..." : "Submit Institutional Request →"}
                      </Button>
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-charcoal hover:text-burgundy uppercase tracking-wider py-2 font-semibold"
                      >
                        <MessageSquare size={14} className="text-burgundy" /> Instant WhatsApp Connect
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Greyscale Google Map */}
      <section className="bg-white border-t border-ivory-sand py-16">
        <div className="mx-auto max-w-academic px-6 md:px-12">
          <div className="font-mono text-xs uppercase tracking-wider text-burgundy mb-2 font-bold">Campus Location</div>
          <h3 className="font-serif text-2xl text-charcoal mb-6">Headquarters: Bommanahalli, Bengaluru</h3>
          <div className="w-full h-80 border border-ivory-sand overflow-hidden filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-sm">
            <iframe
              title="RAAK Sapphire Bengaluru Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.012520330107!2d77.6258833!3d12.9069755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14eb91e2b58d%3A0xc3b8608e0ee7eef7!2sPrashanth%20Hospital%2C%20Bommanahalli!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
