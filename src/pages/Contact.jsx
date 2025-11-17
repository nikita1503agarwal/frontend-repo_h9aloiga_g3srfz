import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function submit(e) {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thank you! We will reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="mt-3 text-white/80 max-w-prose">Request a quote, schedule a consultation, or ask about our K9 division. Our dispatch team is available 24/7.</p>
        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full bg-white/5 rounded-md px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full bg-white/5 rounded-md px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
            </div>
            <div>
              <label className="text-sm text-white/70">Phone</label>
              <input name="phone" className="mt-1 w-full bg-white/5 rounded-md px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-white/70">Inquiry Type</label>
              <select name="type" className="mt-1 w-full bg-white/5 rounded-md px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40">
                <option>General</option>
                <option>Request a Quote</option>
                <option>K9 Division</option>
                <option>Careers</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" rows={6} className="mt-1 w-full bg-white/5 rounded-md px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-400/40" />
            </div>
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <button className="inline-flex items-center px-6 py-3 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">Send</button>
            <div className="text-sm text-white/70">{status}</div>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  )
}
