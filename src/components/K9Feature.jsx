import { PawPrint } from 'lucide-react'

const dogs = [
  { name: 'Ranger', specialty: 'Explosives', breed: 'Belgian Malinois' },
  { name: 'Nova', specialty: 'Narcotics', breed: 'Labrador Retriever' },
  { name: 'Atlas', specialty: 'Dual-purpose', breed: 'German Shepherd' },
  { name: 'Skye', specialty: 'Explosives', breed: 'Springer Spaniel' },
]

export default function K9Feature() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-emerald-300">
          <PawPrint className="w-5 h-5" />
          <span className="uppercase tracking-wider text-xs">K9 Division</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Detection dogs that make the difference</h2>
        <p className="mt-3 text-white/80 max-w-prose">Our 62 certified K9s specialize in narcotics and explosives detection for schools, events, and sensitive facilities. Meet a few of our partners below.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dogs.map((d) => (
            <div key={d.name} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
              <div className="h-32 rounded-lg bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),transparent_60%)]" />
              <div className="mt-4 font-medium">{d.name}</div>
              <div className="text-sm text-white/70">{d.breed} • {d.specialty}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
