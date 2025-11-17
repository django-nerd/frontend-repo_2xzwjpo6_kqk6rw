export default function Testimonials() {
  const quotes = [
    { name: 'QuantX Labs', text: 'Plugged into our broker in a day. The guardrails saved us from a fat-finger 3 times.', role: 'Head of Research' },
    { name: 'Nova Capital', text: 'The modular graph made it trivial to test new policy heads. Huge velocity boost.', role: 'Partner' },
    { name: 'Indie Algo Dev', text: 'Finally a transparent AI agent I can extend. The docs are actually good.', role: 'Community Maintainer' },
  ]

  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What teams say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">“{q.text}”</p>
              <footer className="mt-4 text-sm text-slate-400">{q.name} — {q.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
