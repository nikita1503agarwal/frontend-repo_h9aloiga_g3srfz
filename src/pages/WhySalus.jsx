import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WhySalus() {
  const pillars = [
    { title: 'Vision Insights Technology', desc: 'Live GPS tracking, timestamped checkpoints, and instant photo reports' },
    { title: 'Human Skills that Matter', desc: 'Guards trained in ADA compliance, customer service, and crime-free housing' },
    { title: 'Direct Communication', desc: 'Message your guards and dispatch directly through the platform' },
    { title: 'Experienced Leadership', desc: '50+ years combined management, family-owned, professionally operated' },
    { title: 'Property Management Mindset', desc: 'We act as an extension of your team, not quasi law enforcement' },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Why Choose SALUS</h1>
        <p className="mt-3 text-white/80 max-w-prose">Security that’s verified, human-centered, and built for modern properties.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-white/70">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
