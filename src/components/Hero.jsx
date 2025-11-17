import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Real-time Verified Protection
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            The security company that proves guards actually show up
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Vision Insights gives you live GPS, timestamped checkpoints, and photo-verified patrols. Every round completed. Every incident documented. All in your pocket.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
              Speak with a security expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/why-salus" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">
              See how it works
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}
