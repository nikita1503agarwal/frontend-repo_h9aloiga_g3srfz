import { Smartphone, MapPin, Camera } from 'lucide-react'

export default function Technology() {
  const features = [
    { icon: Smartphone, title: 'Live GPS', desc: 'Track guards in real time from your phone' },
    { icon: MapPin, title: 'Checkpoint Timestamps', desc: 'Every round and checkpoint is verified' },
    { icon: Camera, title: 'Photo Evidence', desc: 'Incidents are documented and uploaded instantly' },
  ]

  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Vision Insights Dashboard</h2>
            <p className="mt-4 text-white/80 max-w-prose">
              The industry’s most transparent guard verification platform. Real-time GPS, checkpoint logs, and incident photos give you complete visibility and peace of mind.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="w-5 h-5 text-emerald-400" />
                  <div className="mt-3 font-medium">{title}</div>
                  <div className="text-sm text-white/70">{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="aspect-video rounded-xl bg-black/40 ring-1 ring-white/10 overflow-hidden">
              <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.2),transparent_60%)]" />
            </div>
            <div className="text-sm text-white/60 mt-3">Space reserved for dashboard screenshots or demo video.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
