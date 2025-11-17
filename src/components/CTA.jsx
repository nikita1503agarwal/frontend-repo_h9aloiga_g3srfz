import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Ready for transparent protection?</h2>
        <p className="mt-3 text-white/80">Speak with a security expert for a tailored plan and quote.</p>
        <div className="mt-6 flex justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
            <Phone className="w-5 h-5" /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
