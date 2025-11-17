import { Shield, Building2, School, Warehouse, Store, Car, Dog, Radio } from 'lucide-react'

const services = [
  { icon: Shield, title: 'On-site Security', desc: 'Armed and unarmed guards for commercial properties' },
  { icon: Car, title: 'Vehicle Patrol', desc: 'Marked patrol units for wide-area coverage' },
  { icon: Dog, title: 'K9 Detection', desc: '62 certified dogs for narcotics and explosives' },
  { icon: Radio, title: '24/7 Dispatch', desc: 'Always-on response and incident coordination' },
  { icon: School, title: 'Education', desc: 'Specialized protocols for schools and campuses' },
  { icon: Building2, title: 'Government', desc: 'Secure solutions for public sector facilities' },
  { icon: Warehouse, title: 'Logistics', desc: 'Warehouse and yard security with checkpoints' },
  { icon: Store, title: 'Retail', desc: 'Loss prevention and customer-forward presence' },
]

export default function Services() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Protection Services</h2>
        <p className="mt-3 text-white/80 max-w-prose">From standard patrol to specialized K9 units, we tailor security to your property’s risks and operations.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-emerald-400/30 transition">
              <Icon className="w-6 h-6 text-emerald-400" />
              <div className="mt-4 font-medium">{title}</div>
              <div className="text-sm text-white/70">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
