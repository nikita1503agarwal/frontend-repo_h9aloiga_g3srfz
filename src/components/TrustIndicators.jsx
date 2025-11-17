export default function TrustIndicators() {
  const stats = [
    { label: 'Coverage', value: '13 states + CA, MX, PH' },
    { label: 'Team', value: '110+ employees' },
    { label: 'Portfolio', value: '25M sq ft protected' },
    { label: 'K9 Division', value: '62 certified dogs' },
  ]

  return (
    <section className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="text-sm text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
