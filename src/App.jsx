import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/motion/SmoothScroll'

// Direct imports for instant, rock-solid rendering without suspense flickering
import Home from '@/pages/Home'
import About from '@/pages/About'
import Schools from '@/pages/Schools'
import CurriculumVTUBU from '@/pages/CurriculumVTUBU'
import Programmes from '@/pages/Programmes'
import ProgrammeDetail from '@/pages/ProgrammeDetail'
import Certifications from '@/pages/Certifications'
import DaaS from '@/pages/DaaS'
import Labs from '@/pages/Labs'
import Careers from '@/pages/Careers'
import Recognition from '@/pages/Recognition'
import Partner from '@/pages/Partner'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ivory text-charcoal flex flex-col">
        {/* Sticky Header with integrated Burger Sidebar */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 w-full">
          <Routes>
            <Route path="/"                  element={<Home />} />
            <Route path="/about"             element={<About />} />
            <Route path="/schools"           element={<Schools />} />
            <Route path="/curriculum"        element={<CurriculumVTUBU />} />
            <Route path="/programmes"        element={<Programmes />} />
            <Route path="/programmes/:slug"  element={<ProgrammeDetail />} />
            <Route path="/certifications"    element={<Certifications />} />
            <Route path="/daas"              element={<DaaS />} />
            <Route path="/labs"              element={<Labs />} />
            <Route path="/careers-ecosystem" element={<Careers />} />
            <Route path="/recognition"       element={<Recognition />} />
            <Route path="/partner"           element={<Partner />} />
            <Route path="*"                  element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}
