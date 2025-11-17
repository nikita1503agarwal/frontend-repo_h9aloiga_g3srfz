import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WhatWeProtect() {
  const sectors = [
    { title: 'Commercial Properties', desc: 'Office towers, business parks, and corporate campuses' },
    { title: 'Retail & Mixed-Use', desc: 'Shopping centers, lifestyle destinations, and storefronts' },
    { title: 'Education', desc: 'K-12, colleges, universities with student-first approach' },
    { title: 'Logistics & Warehousing', desc: 'Distribution centers, yards, and high-value storage' },
    { title: 'Government & Civic', desc: 'Courthouses, municipal buildings, and critical infrastructure' },
    { title: 'Special Events', desc: 'Concerts, sports, and public gatherings' },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">What We Protect</h1>
        <p className="mt-3 text-white/80 max-w-prose">Tailored protection strategies that fit your property, people, and operations. Verified by Vision Insights.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <div key={s.title} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
