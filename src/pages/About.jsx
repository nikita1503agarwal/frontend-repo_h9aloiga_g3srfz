import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const coverage = ['13 U.S. states', 'Canada', 'Mexico', 'Philippines']

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">About SALUS Security</h1>
        <p className="mt-3 text-white/80 max-w-prose">Family-owned, professionally operated. 50+ years of combined leadership delivering modern, transparent protection for properties across North America and the Philippines.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
            <h2 className="text-xl font-medium">Coverage Areas</h2>
            <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
              {coverage.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
            <h2 className="text-xl font-medium">Our Approach</h2>
            <p className="mt-2 text-white/80">We position our guards as an extension of property management—approachable, trained, and accountable through our Vision Insights platform. It’s security designed to serve people and protect places.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
