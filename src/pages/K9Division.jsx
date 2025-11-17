import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const dogs = [
  { name: 'Ranger', breed: 'Belgian Malinois', specialty: 'Explosives', bio: 'Highly focused, experienced in large venues.' },
  { name: 'Nova', breed: 'Labrador Retriever', specialty: 'Narcotics', bio: 'Approachable temperament, ideal for schools.' },
  { name: 'Atlas', breed: 'German Shepherd', specialty: 'Dual-purpose', bio: 'Balanced drive and obedience for complex tasks.' },
  { name: 'Skye', breed: 'Springer Spaniel', specialty: 'Explosives', bio: 'Fast, agile, and precise in crowded environments.' },
]

export default function K9Division() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">K9 Division</h1>
        <p className="mt-3 text-white/80 max-w-prose">Our detection dogs and handlers deliver discreet, highly effective sweeps for narcotics and explosives. Meet a few of our partners.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dogs.map((d) => (
            <div key={d.name} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
              <div className="h-40 rounded-lg bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_60%)]" />
              <div className="mt-4 font-medium">{d.name}</div>
              <div className="text-sm text-white/70">{d.breed} • {d.specialty}</div>
              <p className="mt-2 text-sm text-white/70">{d.bio}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
