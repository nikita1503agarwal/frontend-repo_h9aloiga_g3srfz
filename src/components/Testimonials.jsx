export default function Testimonials() {
  const quotes = [
    {
      quote: 'Their guard verification ended the guesswork for our team. We see every patrol and checkpoint in real time.',
      author: 'Property Manager, 2M sq ft portfolio',
    },
    {
      quote: 'The K9 unit detected contraband before it became a headline. Professional, discreet, effective.',
      author: 'Director of Security, University Campus',
    },
    {
      quote: 'Dispatch responds within seconds and the incident photos are incredibly useful for our reports.',
      author: 'Retail Operations Lead',
    },
  ]

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Trusted by proactive property teams</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="p-6 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
              <blockquote className="text-white/90">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">{q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
