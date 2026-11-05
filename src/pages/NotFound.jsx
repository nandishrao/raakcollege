import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-ivory flex items-center justify-center text-center px-6 py-20">
      <div>
        <div className="font-mono text-sm uppercase tracking-wider text-burgundy font-bold mb-4">404 — Page Not Found</div>
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">Academic Page Unavailable</h1>
        <p className="text-charcoal-light max-w-md mx-auto mb-8 font-light text-base">
          The requested route does not exist within the RAAK Sapphire academic prospectus.
        </p>
        <Button to="/" variant="burgundy" size="lg" className="font-bold">
          Return to Centre of Excellence Home →
        </Button>
      </div>
    </div>
  )
}
